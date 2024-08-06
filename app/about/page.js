import Link from "next/link";

const page = () => {
  return (
    <div>
      <p>about</p>
      <ul>
        <li>
          <Link href="about/test1">test 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
