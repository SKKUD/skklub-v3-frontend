import IntroBanner from "../../components/intro/IntroBanner";
import IntroLayout from "../../layout/intro/IntroLayout";
import IntroSection from "../../components/intro/IntroSection";
import DepartmentSection from "../../components/intro/DepartmentSection";
import Footer from "../../components/common/Footer";
import CampusSwitch from "../../components/common/CampusSwitch";

const data = {
  name: "for:동",
  section: [
    "성균관대학교 동아리연합회는 민주적인 절차를 통해 우리 대학 캠퍼스 문화의 건전한 발전을 위한 기틀을 마련하며, 동아리 관련 행정처리 및 행사 추진을 담당합니다. 동아리연합회는 중앙동아리 소속 학우들의 활동을 장려하고 지원하는 것을 넘어서, 교내 모든 동아리, 소모임, 학회 등이 이용할 수 있는 공간을 제공하고, 중앙동아리 관련 정보를 신입생에게 가장 먼저 제공하는 등 성균인 전체의 동아리 문화생활을 장려합니다.",
    "민주적 의견 수렴을 위해 상시로 운영위원회와 전체동아리대표자회의를 개최하여 상호 정보를 공유하고, 의결사항을 결정하고, 건의 및 논의안건에 대해 의견을 나눕니다. 소통창구를 통해 항상 학내 구성원의 목소리에 귀를 기울이고 있습니다. 동아리연합회는 특별기구로 중앙운영위원회를 구성하고, 학생자치활동에 적극적으로 참여합니다. 학내 모든 동아리인의 목소리를 대변하고, 서로 다른 목소리와 의견을 한데 모아 함께 논의하는 과정을 통해 최선을 향해 나아가려 노력합니다. 동아리연합회는 성균관대학교 전체 학생사회의 발전을 위해 불철주야 노력하고 있습니다.",
    "동아리연합회는 원활한 업무수행을 위해 5개의 집행국과 2개의 특별사무팀으로 구성됩니다. 대내사업국, 비서소통국, 사무국, 행사기획국, 홍보국의 5국과 총무팀, 디자인팀의 2팀이 서로 소통하며 업무를 함께 추진하고 있습니다. 이렇게 진행되는 상시사업과 공약사업의 이행과정은 학우들에게 투명하게 공개됩니다. 각 국의 업무는 아래와 같습니다.",
  ],
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
    <>
      <IntroBanner name={data.name} />
      <IntroLayout campus="Seoul">
        <IntroSection data={data} />
      </IntroLayout>
      <IntroLayout campus="Seoul" color="#222525">
        <DepartmentSection data={data} />
      </IntroLayout>
      <Footer />
      <CampusSwitch />
    </>
  );
}
