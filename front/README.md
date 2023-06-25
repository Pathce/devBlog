# FRONT WorkSpace

## 환경

도구 : Yarn Workspace

# 구성

### front/

- dependencies 관리
  - 공통 사용 dependencies 설정
- tsconfig.base.json 설정
  - 하위 프로젝트에서 상속받아 사용

### apps

- 서비스할 App 모음
- NextJS + Typescript 구성
  - front/tsconfig.base.json 을 상속받아 사용

### packages

- 공통 컴포넌트, 유틸, 스크립트 등 여러 App에서 공유하는 자원의 모음
