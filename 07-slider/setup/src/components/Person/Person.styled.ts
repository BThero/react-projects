import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

interface ArticleProps {
  position: string;
}

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: var(--transition);

  opacity: ${(props: ArticleProps) => {
    return props.position === "cur" ? 1 : 0;
  }};

  transform: ${(props: ArticleProps) => {
    if (props.position === "next") {
      return "translateX(100%)";
    } else if (props.position === "cur") {
      return "translateX(0)";
    } else {
      return "translateX(-100%)";
    }
  }};
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
`;

export const Title = styled.p`
  color: var(--clr-grey-3);
  margin-bottom: 0.75rem;
  text-transform: capitalize;
`;

export const P = styled.p`
  text-align: center;
  margin: 2rem auto 0 auto;
  max-width: 45rem;
  line-height: 2;
  color: var(--clr-grey-5);
`;

export const Icon = styled(FaQuoteRight)`
  margin-top: 1rem;
  color: var(--clr-primary-5);
  font-size: 3rem;
`;
