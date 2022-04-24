## .env
#### 환경변수 설정
```javascript
JWT_SECRET = 토큰 암호화 비밀키
JWT_EXPIRES_SEC = 토큰 만료 시간(7200)

BCRYPT_SALT_ROUNDS = 비밀번호 암호화 Salt 길이

HOST_PORT = 포트 번호

DB_HOST = 데이터베이스 호스트
DB_PORT = 데이터베이스 포트
DB_USER = 데이터베이스 사용자
DB_SCHEMA = 데이터베이스 이름
DB_PASSWORD = 사용자 비밀번호
```


<br/><br/>
## /accounts
#### 회원가입(/signup) - REQ
```javascript
{
  email: 이메일,
  pwd: 비밀번호,
  name: 이름,
  phone: 연락처
}
```

#### 회원가입(/signup) - RES
```javascript
{
  id: 생성된 user id
}
```
#### 로그인(/login) - REQ
```javascript
{
  email: 이메일,
  pwd: 비밀번호
}
```
#### 로그인(/login) - RES
```javascript
{
  token: jwt토큰,
  email: 이메일
}
```


<br/><br/>
## /users
#### Header 공통 사항
```javascript
{
  Authorization: `Bearer ${ token }`
}
```
#### 회원 정보 조회(/) - REQ
```javascript
{
}
```
#### 회원 정보 조회(/) - RES
```javascript
{
  email: 이메일,
  name: 이름,
  phone: 연락처
}
```
#### 회원 정보 수정(/edit) - REQ
```javascript
{
  pwd: 비밀번호,
  name: 이름,
  phone: 전화번호
}
```
#### 회원 정보 수정(/edit) - RES
```javascript
{
  resCode: 0,
}
```
#### 회원 탈퇴(/resign) - REQ
```javascript
{
}
```
#### 회원 탈퇴(/resign) - RES
```javascript
{
  resCode: 0,
}
```


<br/><br/>
## /resumes
#### Header 공통 사항
```javascript
{
  Authorization: `Bearer ${ token }`
}
```
#### 이력서 저장(/save) - REQ
```javascript
{
    title: 이력서 제목,
    photo: AWS에 저장된 사진 URL,
    department: 직무,
    portfolio: 포트폴리오 URL,
    template: 템플릿 번호,
    awards: 수상 내역 배열,
    careers: 경력 내역 배열,
    certifications: 자격증 내역 배열,
    educations: 교육 내역 배열,
    projects: 프로젝트 내역 배열,
    qnas: 추가 질문 배열,
    techs: 기술 스택 내역 배열,
}
```
#### 이력서 저장(/save) - RES
```javascript
{
  resCode: 0,
  r_id: 이력서 번호,
}
```
#### 이력서 조회(/load) - REQ
```javascript
{
  
}
```
#### 이력서 조회(/load) - RES
```javascript
{
  {
    "resCode": 0,
    "resumes": [
        {
            "r_id": 3,
            "title": "이력서2",
            "photo": "사진2",
            "department": "직무2",
            "portfolio": "포트폴리오2",
            "template": 2,
            "createdDate": "2022-04-22",
            "awards": [
                {
                    "id": 1,
                    "awardName": "수상2",
                    "awardDate": "2022-04-20",
                    "awardCntns": "수상2",
                    "r_id": 3
                },
            ],
            "careers": [
                {
                    "id": 1,
                    "cmpnyName": "careers",
                    "workStartDate": "2022-04-20",
                    "workEndDate": "2022-04-20",
                    "workCntns": "workCnts",
                    "r_id": 3
                }
                
            ],
            "certifications": [
                {
                    "id": 1,
                    "certiName": "certName",
                    "certiScore": "certScore",
                    "certiDate": "2022-04-20",
                    "r_id": 3
                }
            ],
            "educations": [
                {
                    "id": 1,
                    "eduName": "eduName",
                    "eduStartDate": "2022-04-20",
                    "eduEndDate": "2022-04-20",
                    "eduCntns": "eduCntns",
                    "r_id": 3
                }
            ],
            "projects": [
                {
                    "id": 1,
                    "prjName": "prjName",
                    "prjStartDate": "2022-04-20",
                    "prjEndDate": "2022-04-20",
                    "prjCntns": "prjCntns",
                    "r_id": 3
                }
            ],
            "qnas": [
                {
                    "id": 1,
                    "quest": "quest",
                    "answer": "answer",
                    "r_id": 3
                }
            ],
            "techs": [
                {
                    "id": 1,
                    "techName": "tech1",
                    "r_id": 3
                }
            ]
        },
        {
            "r_id": 4,
            "title": "이력서2",
            "photo": "사진2",
            "department": "직무2",
            "portfolio": "포트폴리오2",
            "template": 2,
            "createdDate": "2022-04-22",
            "awards": [
```
#### 이력서 삭제(/get) - REQ
```javascript
{
  r_id: 이력서 번호,
}
```
#### 이력서 삭제(/get) - RES
```javascript
{
  resCode: 0,
}
```
#### 사진 업로드(/upload) - REQ
```javascript
Header
{
  Authorization: `Bearer ${ token }`
  Content-Type: "multipart/form-data"
}
```
```javascript
Body/form-data
{
  image: 파일 경로
}
```
#### 사진 업로드(/upload) - RES
```javascript
{
  url: AWS에 저장된 사진 URL
}
```
#### 사진 로드(/image/:key) - REQ
```javascript
/image/AWS에 저장된 사진 URL
```

<br/><br/>
## /temps
#### 임시 저장(/save) - REQ
```javascript
{
    "photo": "사진1-1",
    "department": "직무1-1",
    "portfolio": "포트폴리오1-1",
    "awards": [
        {
            "id": 1,
            "awardName": "1-1",
            "awardDate": "1-1",
            "awardCntns": "1-1",
            "r_id": 1
        },
        {
            "id": 2,
            "awardName": "1-2",
            "awardDate": "1-2",
            "awardCntns": "1-2",
            "r_id": 1
        }
    ],
    ...
}
```

#### 임시 저장(/save) - RES
```javascript
{
    "resCode": 0,
}
```

#### 임시 저장 불러오기(/load) - REQ
```javascript
{

}
```
#### 임시 저장 불러오기(/load) - RES
```javascript
{
    "resCode": 0,
    "photo": "사진1-1",
    "department": "직무1-1",
    "portfolio": "포트폴리오1-1",
    "awards": [
        {
            "id": 1,
            "awardName": "1-1",
            "awardDate": "1-1",
            "awardCntns": "1-1",
            "r_id": 1
        },
        {
            "id": 2,
            "awardName": "1-2",
            "awardDate": "1-2",
            "awardCntns": "1-2",
            "r_id": 1
        }
    ],
    ...
}
```
