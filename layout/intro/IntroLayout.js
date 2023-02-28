import DepartmentCard from "../../components/intro/DepartmentCard";

const dongyeon = {
  title: "for:동",
  section: ["Who we are 내용", "What we do 내용", "How we work 내용"],
  department: [
    {
      name: "사무국",
      emoji: "✏️",
      description: "부서 소개 내용 .... ",
    },
    {
      name: "홍보국",
      emoji: "🔊",
      description: "부서 소개 내용 .... ",
    },
  ],
};

export default function IntroLayout(props) {
  return (
    <div className="wrap" style={{ margin: "0 auto" }}>
      <h1>This is {props.campus}</h1>
      <div style={{ width: "60%" }}>
        {dongyeon.department.map((dept) => (
          <DepartmentCard dept={dept} key={dept.name} />
        ))}
      </div>
    </div>
  );
}
