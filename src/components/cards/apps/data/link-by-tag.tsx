const linkByTag = (tech: string): string | undefined => {
  switch (tech) {
    case "AWS EC2":
      return "https://aws.amazon.com/ec2/";
    case "AWS RDS":
      return "https://aws.amazon.com/rds/";
    case "AWS S3":
      return "https://aws.amazon.com/s3/";
    case "AWS Athena":
      return "https://aws.amazon.com/athena/";
    case "AWS EventBridge":
      return "https://aws.amazon.com/eventbridge/";
    case "AWS Step Functions":
      return "https://aws.amazon.com/step-functions/";
    case "AWS Glue":
      return "https://aws.amazon.com/glue/";
    case "AWS Lambda":
      return "https://aws.amazon.com/lambda/";
    case "AWS Bedrock":
      return "https://aws.amazon.com/bedrock/";
    case "AWS Redshift":
      return "https://aws.amazon.com/redshift/";
    case "Next.js":
      return "https://nextjs.org/";
    case "React.js":
      return "https://react.dev/";
    case "FastAPI":
      return "https://fastapi.tiangolo.com/";
    case "Django":
      return "https://www.djangoproject.com/";
    case "Supabase":
      return "https://supabase.com/";
    case "React Native":
      return "https://reactnative.dev/";
    case "MySQL":
      return "https://www.mysql.com/";
    case "PostgreSQL":
      return "https://www.postgresql.org/";
    case "Python":
      return "https://www.python.org/";
    case "Whisper":
      return "https://openai.com/research/whisper";
    case "MediaPipe":
      return "https://developers.google.com/mediapipe";
    default:
      return;
  }
};

export default linkByTag;
