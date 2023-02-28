import { Card } from "@mui/material";

export default function DepartmentCard({ dept }) {
  return (
    <div style={{ display: "flex", width:'100%' }}>
      <div style={{width:'35%'}}>
        <div>{dept.emoji}</div>
        <h2>{dept.name}</h2>
      </div>
      <Card sx={{width:'65%'}}>{dept.description}</Card>
    </div>
  );
}
