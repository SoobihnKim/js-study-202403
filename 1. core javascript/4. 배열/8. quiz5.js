/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
-
*/

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

var userNum = prompt(`현재 멤버: ${tvxq}\n메뉴를 선택하세요.\n
1. 새로운 이름 추가\n2. 기존 이름 삭제 \n3. 프로그램 종료`);

switch (userNum) {
  case "1":
    while (true) {
      var userInput = prompt(`추가할 새로운 멤버 이름을 입력하세요.`);

      var index = tvxq.indexOf(userInput);

      if (index === -1) {
        tvxq.push(`${userInput}`);
        alert(`${userInput}가 추가되었습니다.`);
        alert(`추가 완료!\n현재 멤버: ${tvxq}`);
        break;
      }
    }
    break;

  case "2":
    while (true) {
      var deleteTarget = prompt(`삭제할 멤버 이름을 입력하세요.`);

      var index = tvxq.indexOf(deleteTarget);

      if (index !== -1) {
        tvxq.splice(index, 1);
        alert(`${deleteTarget}(이)가 삭제되었습니다.`);
        alert(`삭제 완료!\n현재 멤버: ${tvxq}`);
        break;
      } else {
        alert(`${deleteTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
        continue;
      }
    }
    break;

  case "3":
    alert(`프로그램을 종료합니다.`);
    break;
  default:
    alert("1, 2, 3 중 하나를 입력하세요!");
}
