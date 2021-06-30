import React from "react";
import PropTypes from "prop-types";
import { ArticleContainer } from "./styles";

const Article = ({
  paddingTop,
  children,
  isCenter = false,
  isReverse = false,
  justifyContent,
}) => {
  return (
    <ArticleContainer
      justifyContent={justifyContent}
      paddingTop={paddingTop}
      isCenter={isCenter}
      isReverse={isReverse}
    >
      {children}
    </ArticleContainer>
  );
};
Article.propTypes = {
  children: PropTypes.any.isRequired,
  isCenter: PropTypes.bool,
  isReverse: PropTypes.bool,
  paddingTop: PropTypes.string,
  justifyContent: PropTypes.string,
};
export default Article;
