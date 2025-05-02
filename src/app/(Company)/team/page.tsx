export default function TeamPage() {
  const team = [
    {
      name: "소요환",
      position: "대표이사/CEO",
      careers: [
        "현) 한남대학교 미디어영상학과 교수",
        "현) 한국메타버스학회 부회장",
        "현) 대전광역시 정보화 위원",
        "전) 한남XR센터 센터장",
        "전) 한남대학교 4차 산업혁명 혁신선도대학 사업단 단장",
        "전) 한남디자인팩토리 센터장",
        "전) 대전정보문화산업진흥원 이사",
        "미) NewYork Institute of Technology Communication전공 졸업",
      ],
      field: "3D/VR/AR/MR/XR/메타버스",
    },
    {
      name: "XuYanan",
      position: "수석연구원/PhD",
      careers: [
        "10년 연구개발 경력",
        "현) ㈜메타뱅크 기업부설연구소 수석연구원",
        "전) 남서울대학교 연구교수",
        "전) 한국기초과학연구원 연구원",
        "전) 한국과학기술연구원(KAIST) 연수연구원",
        "SCOPUS논문 7건 게재",
        "정부과제참여 9건 실적",
        "지적재산권등록 7건 실적",
      ],
      field: "Computer Vision/ Deep Learning",
    },
    {
      name: "우상혁",
      position: "이사/PhD",
      careers: [
        "현) 한남대학교 미디어영상학과 교수",
        "전) ㈜브릿지기업부설연구소 연구소장",
        "전) ㈜문글로우 대표이사",
        "전) ㈜이노윌기업부설연구소 연구소장",
        "전) 삼성중공업생산 기술연구소 책임연구원",
        "프) Universitede Bourgogne 정보영상처리전공 박사 졸업",
      ],
      field: "Image Process/ Computer Vision",
    },
    {
      name: "김민호",
      position: "이사",
      careers: [
        "현) ㈜메타뱅크 전략기획담당 이사",
        "전) C&M방송담당 이사",
        "전) MBC제작 국장",
        "전) MBC제작부장",
        "한국방송대상 기자부분수상",
        "한국기자상 수상",
        "한) 연세대학교 언론홍보대학원 석사 졸업",
      ],
      field: "광고홍보/ 마케팅",
    },
    {
      name: "강민균",
      position: "부대표/연구소장",
      careers: [
        "17년 연구개발 경력",
        "현) ㈜메타뱅크 기업부설연구소 연구소장",
        "전) ㈜새올정보기술 책임연구원",
        "전) ㈜소프트아이텍 수석연구원",
        "전) ㈜이공감부장",
        "전) ㈜한국문화기술대리 정부R&D 과제 10건 참여",
        "지적재산권등록 30건 실적",
      ],
      field: "Software/ ServerDevelopment",
    },
    {
      name: "임재현",
      position: "기획실장/PhD",
      careers: [
        "7년 연구개발 경력",
        "현) ㈜메타뱅크 기업부설연구소 책임연구원",
        "전) ㈜씨큐엠 대표",
        "전) ㈜디앤씨컴퍼니 팀장",
        "전) 한남대학교 디자인팩토리 연구원",
        "정부과제 참여 3건실적",
        "지적재산권 등록 3건 실적",
      ],
      field: "Photogrammetry/ Multimedia",
    },
    {
      name: "진현웅",
      position: "이사/PhD",
      careers: [
        "현) 한남대학교 경영학과 교수",
        "전) 방문교수, DepartmentofMechanical, Industrial & Manufacturing Engineering, OregonStateUniversity, USA",
        "전) 편집위원, International Journal of Applied Management Science",
        "전) Senior Consultant: GCSM, i2 Technologies, Dallas",
        "전) 한국린경영연구원(LEIKorea) 전문위원",
        "한) 한국과학기술연구원(KAIST) 산업공학전공 박사 졸업",
      ],
      field: "경영의사결정/ 생산운영관리",
    },
    {
      name: "이지현",
      position: "이사",
      careers: [
        "현) ㈜메타뱅크 재무담당이사",
        "전) 아시아재단(일본지사) 사원",
        "전) The Asia Foundation활동",
        "일) 일본 레이타쿠대학 국제경제학부 국제경영학과 석사 졸업",
      ],
      field: "재무/경영관리",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-2">
          메타뱅크 팀은 열정적이고 창의적인 직원들로 이루어져 있습니다.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400">
          우리는 혁신적인 아이디어를 공유하고, 동료들 간의 협력을 통해 서로를
          끌어올리며 성장합니다.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full"
          >
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-1">
              {member.name}
            </h2>
            <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {member.position}
            </div>
            <ul className="mb-3 text-gray-600 dark:text-gray-300 text-sm space-y-1 list-disc list-inside">
              {member.careers.map((career, idx) => (
                <li key={idx}>{career}</li>
              ))}
            </ul>
            <div className="mt-auto pt-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                전공분야:
              </span>{" "}
              {member.field}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
