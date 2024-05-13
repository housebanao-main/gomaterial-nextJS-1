import { useCallback } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/signin");
  }, [router]);

  return (
    <div className="w-full relative bg-white h-[1117px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1728px] h-[60px]" />
      <div
        className="absolute top-[777px] left-[730px] bg-gainsboro w-[283px] h-9 cursor-pointer"
        onClick={onRectangle1Click}
      />
    </div>
  );
};

export default Register;
