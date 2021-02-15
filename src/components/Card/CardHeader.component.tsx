import React from "react";
import styled from "styled-components";

interface CardHeaderProps {
  image?: string;
  title?: string;
  subtitle?: string;
  avatar?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--borderColor);
  padding: 30px 20px 20px;

  overflow: hidden;

  img {
    transition: transform 0.5s, filter 0.5s ease-out;
  }
`;

const Avatar: any = styled.div`
  --avatarSize: 68px;
  width: var(--avatarSize);
  height: var(--avatarSize);
  border-radius: calc(var(--avatarSize) / 2);
  background: var(--slateBlue);
  box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
  background-image: url(${(props: any) => props.image});
  background-size: cover;
  margin: 0 auto 10px;
`;

const Cover: any = styled.img`
  height: 250px;
  margin-bottom: 10px;
  background-image: url(${(props: any) => props.image});
  background-size: cover;

  &:hover {
    transform: scale(1.5);
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.34px;
  text-align: center;
  color: var(--darkBlue);
  margin: 0 0 10px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  letter-spacing: 0.4px;
  text-align: center;
  text-transform: uppercase;
  color: #62788d;
  margin: 0 5px;
`;

export const CardHeader = ({
  title,
  image,
  avatar,
  subtitle,
  children,
  ...props
}: CardHeaderProps) => {
  return (
    <Header className="img-hover-zoom" {...props}>
      {image && avatar && <Avatar image={image} />}
      {image && !avatar && <Cover image={image} />}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Header>
  );
};
