interface Joint {
  id: string;
  x: number;
  y: number;
}

interface Pose {
  joints: Joint[];
  bones: [string, string][];
}

const poses: Record<string, Pose> = {
  running: {
    joints: [
      { id: "head", x: 150, y: 40 },
      { id: "neck", x: 150, y: 72 },
      { id: "lShoulder", x: 122, y: 78 },
      { id: "rShoulder", x: 178, y: 78 },
      { id: "lElbow", x: 96, y: 112 },
      { id: "rElbow", x: 204, y: 58 },
      { id: "lHand", x: 76, y: 150 },
      { id: "rHand", x: 216, y: 20 },
      { id: "hip", x: 150, y: 162 },
      { id: "lHip", x: 133, y: 168 },
      { id: "rHip", x: 167, y: 168 },
      { id: "lKnee", x: 108, y: 222 },
      { id: "rKnee", x: 190, y: 208 },
      { id: "lFoot", x: 88, y: 292 },
      { id: "rFoot", x: 232, y: 258 },
    ],
    bones: [
      ["head", "neck"],
      ["neck", "lShoulder"],
      ["neck", "rShoulder"],
      ["lShoulder", "lElbow"],
      ["lElbow", "lHand"],
      ["rShoulder", "rElbow"],
      ["rElbow", "rHand"],
      ["neck", "hip"],
      ["hip", "lHip"],
      ["hip", "rHip"],
      ["lHip", "lKnee"],
      ["lKnee", "lFoot"],
      ["rHip", "rKnee"],
      ["rKnee", "rFoot"],
    ],
  },
  yoga: {
    joints: [
      { id: "head", x: 150, y: 36 },
      { id: "neck", x: 150, y: 68 },
      { id: "lShoulder", x: 124, y: 76 },
      { id: "rShoulder", x: 176, y: 76 },
      { id: "lElbow", x: 108, y: 42 },
      { id: "rElbow", x: 192, y: 42 },
      { id: "lHand", x: 100, y: 10 },
      { id: "rHand", x: 200, y: 10 },
      { id: "hip", x: 150, y: 160 },
      { id: "lHip", x: 134, y: 166 },
      { id: "rHip", x: 166, y: 166 },
      { id: "lKnee", x: 150, y: 210 },
      { id: "rKnee", x: 210, y: 190 },
      { id: "lFoot", x: 150, y: 296 },
      { id: "rFoot", x: 178, y: 168 },
    ],
    bones: [
      ["head", "neck"],
      ["neck", "lShoulder"],
      ["neck", "rShoulder"],
      ["lShoulder", "lElbow"],
      ["lElbow", "lHand"],
      ["rShoulder", "rElbow"],
      ["rElbow", "rHand"],
      ["neck", "hip"],
      ["hip", "lHip"],
      ["hip", "rHip"],
      ["lHip", "lKnee"],
      ["lKnee", "lFoot"],
      ["rHip", "rKnee"],
      ["rKnee", "rFoot"],
    ],
  },
  reach: {
    joints: [
      { id: "head", x: 130, y: 46 },
      { id: "neck", x: 140, y: 78 },
      { id: "lShoulder", x: 116, y: 84 },
      { id: "rShoulder", x: 168, y: 78 },
      { id: "lElbow", x: 90, y: 60 },
      { id: "rElbow", x: 208, y: 48 },
      { id: "lHand", x: 70, y: 26 },
      { id: "rHand", x: 244, y: 20 },
      { id: "hip", x: 145, y: 168 },
      { id: "lHip", x: 128, y: 174 },
      { id: "rHip", x: 162, y: 174 },
      { id: "lKnee", x: 118, y: 230 },
      { id: "rKnee", x: 168, y: 232 },
      { id: "lFoot", x: 108, y: 296 },
      { id: "rFoot", x: 176, y: 296 },
    ],
    bones: [
      ["head", "neck"],
      ["neck", "lShoulder"],
      ["neck", "rShoulder"],
      ["lShoulder", "lElbow"],
      ["lElbow", "lHand"],
      ["rShoulder", "rElbow"],
      ["rElbow", "rHand"],
      ["neck", "hip"],
      ["hip", "lHip"],
      ["hip", "rHip"],
      ["lHip", "lKnee"],
      ["lKnee", "lFoot"],
      ["rHip", "rKnee"],
      ["rKnee", "rFoot"],
    ],
  },
};

interface MotionFigureProps {
  pose?: keyof typeof poses;
  className?: string;
  lineColor?: string;
  jointColor?: string;
  animated?: boolean;
}

export function MotionFigure({
  pose = "running",
  className = "",
  lineColor = "rgba(247,248,246,0.35)",
  jointColor = "#C6FF3D",
  animated = true,
}: MotionFigureProps) {
  const { joints, bones } = poses[pose];
  const jointMap = Object.fromEntries(joints.map((j) => [j.id, j]));

  return (
    <svg
      viewBox="0 0 300 320"
      className={`${className} ${animated ? "motion-figure-float" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="150" cy="45" r="20" fill={jointColor} opacity="0.12" />
      {bones.map(([a, b], i) => {
        const ja = jointMap[a];
        const jb = jointMap[b];
        return (
          <line
            key={i}
            x1={ja.x}
            y1={ja.y}
            x2={jb.x}
            y2={jb.y}
            stroke={lineColor}
            strokeWidth={2}
            strokeLinecap="round"
          />
        );
      })}
      {joints.map((j, i) => (
        <circle
          key={j.id}
          cx={j.x}
          cy={j.y}
          r={j.id === "head" ? 12 : 5}
          fill={j.id === "head" ? "none" : jointColor}
          stroke={j.id === "head" ? jointColor : "none"}
          strokeWidth={j.id === "head" ? 2 : 0}
          className={animated ? "motion-figure-joint" : ""}
          style={animated ? { animationDelay: `${i * 90}ms` } : undefined}
        />
      ))}
    </svg>
  );
}
