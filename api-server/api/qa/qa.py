from fastapi import APIRouter
router = APIRouter(
    prefix="/api/qa",
)


@router.get("/question")
def answer(question: str = "", gender: bool = 0):
    answers = []
    genderStr =  "남" if gender  else "여"
    match question:
        case "q1":
            answers.append("혹시 보드 게임 좋아해?")
            answers.append("만약 연인이랑 내기를 하게되면")
            answers.append("어떻게 행동하는 편이야?")
        case "q2.1":
            answers.append("나도 지고는 못 사는데 ㅋㅋㅋ ")
            answers.append("나랑 내기 한번 할래?")
            answers.append("나는 다 잘해서 종목은 니가 골라ㅋㅋㅋㅋ")
        case "q2.2":
            answers.append("완전 사랑꾼이네 ㅎㅎ")
            answers.append("전 {genderStr}친 한테도 많이 져줬나보네?")
            answers.append("연애는 몇번 정도 해봤어?")
        case "q2.3":
            answers.append("정정당당하게 하다가 상대방 기분이 안좋아 보일때는 어떻게 행동해?")
        case "q3":
            answers.append("만약에, 너가 겨울에 집에서 애인하고 먹을 밥을 포장해와야 할 때")
            answers.append("넌 어떻게 말하는 편이야?")
        case "q4.1":
            answers.append("효율적인 걸 되게 좋아하는구나?")
            answers.append("그럼 생일 때는 주로 어떤 생일 파티를 해?")
        case "q4.2":
            answers.append("우와 같이 다니는 걸 되게 좋아하는구나")
            answers.append("그럼 애인이랑 여행가면 어느 여행지에 가고 싶어?")
        case "q4.3":
            answers.append("너 정말 공평하구나")
            answers.append("장난기도 많아보여. 친구 많아보이는데, 동아리나 동호회에 간다면 어떻게 활동해?")
        case "q5":
            answers.append("좋아하는 사람이 있을때 어떻게 행동하는편이야?")
        case "q6.1":
            answers.append("초반에 카톡 답장이 느리면 어떻게하는편?")
        case "q6.2":
            answers.append("애인이 생겼는데 좋아하는 티를 잘 안내면 서운해 할때도 많잖아")
            answers.append("그럼 자주 싸울텐데")
            answers.append("싸우면 어떻게 행동해?")
        case "q6.3":
            answers.append("ㅋㅋㅋㅋㅋㅋㅋㅋ너 술좋아하겠네")
            answers.append("그럼 술을 많이 마셔서 취했을 때 네 모습은 어때?")

    return answers

@router.get("/question")
def answer(question: str = "", gender: bool = 0):
    answers = []
    match question:
        case "q1":
            answers.append("내 인생에 패배는 없어 목숨 걸어야지")
            answers.append("이기는건 별로 중요하지 않아 그래서 몰래몰래 져  주는 편이야")
            answers.append("정정당당하게 해야지")
        case "q2.1":
            answers.append("오늘 저녁은 치킨이닭! (게임)")
            answers.append("내기도 하고 건강도 챙기고 역시 운동이지!")
            answers.append("코노 점수 대결!")
        case "q2.2":
            answers.append("알아서 뭐하게? 만날 만큼 만났어")
            answers.append("아주 다양한 경험이 있지 ㅋ")
            answers.append("연애 그게 뭔데..?")
        case "q2.3":
            answers.append("끝나고 맛있는거 사주면 돼")
            answers.append("그때는 눈치껏 져줘야 지..")
            answers.append("끝까지 정정당당하게 해야지!")
        case "q3":
            answers.append("밖에 춥잖아. 너는 여기에 있어 내가 혼자 빨리 갔다올게")
            answers.append("같이 가자. 같이 가면 하나도 안 추워!")
            answers.append("너가 갔다올래? 싫으면 가위바위보!")
        case "q4.1":
            answers.append("친구들 다 불러서 파티룸 잡고 파티해!")
            answers.append("나 친한친구들이랑 놀아")
            answers.append("생일파티? 꼭 해야해?")
        case "q4.2":
            answers.append("다낭 같은 편히 쉴 수 있는 휴양지지!")
            answers.append("여행은 구경하러 하는 거 아니야? 무조건 뉴욕같은 대도시")
            answers.append("난 집이 좋아 가까운 호캉스지")
        case "q4.3":
            answers.append("나는 같이 간 친구들이랑 놀아 ")
            answers.append("그런 곳 갔으면 새로운 사람 만나야지! ")
            answers.append("나? 안 가는데?")
        case "q5":
            answers.append("친해지기 위해 먼저 적극적으로 다가가는 편이야")
            answers.append("먼저 다가오기전까지 티를 안내")
            answers.append("술기운이 있어야 얘기를 잘 하는편이야 (술버릇)")
        case "q6.1":
            answers.append("나는 포기를 모르는 사람이야 끝을 봐야지지")
            answers.append("답장이 느리면 바로 포기")
            answers.append("하루종일 답장 기다리다가 우울해 할 것 같아..")
        case "q6.2":
            answers.append("우리가 왜 싸웠는지 확실하게 알기 위해 계속 대화할 것 같아")
            answers.append("상대가 잘 못해도 내가 무조건 사과하는편")
            answers.append("자존심이 있지, 절대 안 져준다")
        case "q6.3":
            answers.append("요즘 우리나라 경제가 말이지…")
            answers.append("zzZ")
            answers.append("신난다~@@! 더 마서ㅕ얒ㅣ~")

    return answers