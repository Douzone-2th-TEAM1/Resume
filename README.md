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
- pdf 파일 형식 저장

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
