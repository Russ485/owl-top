import { useEffect, useState } from "react";
import { Button, Htag, Input, Rating, Tag } from "../components";
import { P } from "../components/P/P";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { Textarea } from "../components/Textarea/Textarea";
import { API } from "../helpers/api";
import { useRouter } from "next/router";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  const router = useRouter();

  useEffect(() => {
    router.push("/courses/financial-analytics");
  }, []);

  return (
    <>
      <Htag tag="h1">Header</Htag>
      <Button appearence="primary" className="asdasd" arrow="right">
        Button
      </Button>
      <Button appearence="ghost" arrow="right">
        Button
      </Button>
      <P>Напишу сразу в двух курсах, так как проходил оба. Java будет многим</P>
      <P size="s">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим
      </P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green" href="123">
        Green
      </Tag>
      <Tag size="m" color="grey">
        Gray
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input placeholder="asd" />
      <Textarea placeholder="asd" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
