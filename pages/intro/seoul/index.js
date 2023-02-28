import Head from "next/head";
import Image from "next/image";
import DepartmentCard from "../../../components/intro/DepartmentCard";
import IntroLayout from "../../../layout/intro/IntroLayout";

const dongyeon = {
  title: "for:동",
  section: ["Who we are 내용", "What we do 내용", "How we work 내용"],
  department: [
    {
      name: "사무국",
      emoji: "✏️",
      description:
        "사무국은 전체적인 동아리 활동에 필요한 상시서류를 작성하고, 신규등록 및 재등록 관련 업무를 진행합니다. 징계 및 경고 동아리를 관리하고, 동아리연합회 집행부회의, 전체동아리대표자회의 및 운영위원회의에 참석하여 회의록을 작성하고 관리합니다.",
    },
    {
      name: "홍보국",
      emoji: "🔊",
      description:
        "사무국 소속 총무팀은 성균관대학교 중앙동아리의 원활한 활동을 보조하기 위해 동아리연합회 전반의 재정 관련 업무를 수행합니다. 경상보조금, 회장장학금, 행사지원금의 지급 관련 행정을 전담합니다. 또한 동아리연합회 사업 운영을 위한 학생회비 예산 수립, 집행, 학기별 결산을 전문적으로 담당합니다.",
    },
  ],
};

export default function SeoulDY() {
  return (
    <IntroLayout campus="Seoul">
      <div style={{ width: "60%" }}>
        {dongyeon.department.map((dept) => (
          <DepartmentCard dept={dept} key={dept.name} />
        ))}
      </div>
    </IntroLayout>
  );
}
