# Resume

> 사용자가 이력서 템플릿을 설정할 수 있는 사이트

## 👩‍🎨 스토리보드 및 디자인 시안

[피그마 바로가기 ❯❯](https://www.figma.com/file/ohyqyTXrCwDdLpyqqw3wqH/Resume?node-id=0%3A1)

---

<br/>

## 💻 주요 기능

### 회원 정보 관리

- 로그인, 로그아웃, 비밀번호 찾기
- 회원가입, 회원 탈퇴
- 회원 정보 수정

### 이력서 관리

- 이력서 작성
- 작성 중인 이력서 임시 저장(only one)
- 나의 이력서 조회
- 템플릿 선택 및 적용

---

<br/>

## 📂 Front 디렉토리 구조

| 폴더 / 파일 | 설명                               |
| ----------- | ---------------------------------- |
| assets      | 이미지 디렉토리                    |
| components  | 각 page에 사용되는 component 모음. |
| pages       | Route를 위한 page 목록.            |
| redux       | 전역 상태 관리                     |
| styles      | 기본 공통 스타일.                  |
| utils       | 공통 함수                          |
| App.js      | public, private Route 정리.        |

---

<br/>

## 📂 Back 디렉토리 구조

| 폴더 / 파일 | 설명                             |
| ----------- | ------------------------------- |
| controller  | 실행 로직 구현                   |
| data        | 데이터 생성 및 접근              |
| connections | 데이터베이스, s3 연결            |
| aws         | s3 저장소 관련                  |
| router      | 경로 설정                       |
| config.js   | 환경변수 접근                    |
| server.js   | 서버 실행                        |

---

<br/>

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

---

<br/>

## APIs

### /accounts
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


---

<br/>

### /users
#### Header 공통 사항

```javascript
{
  Authorization: `Bearer ${token}`;
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

---

<br/>

### /resumes
#### Header 공통 사항

```javascript
{
  Authorization: `Bearer ${token}`;
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
          이력서1...
        },
        {
          이력서2...
        }
     ]
  }

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

---

<br/>

### /temps
#### 임시 저장(/save) - REQ

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

