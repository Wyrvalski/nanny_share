import React from "react";
import PropTypes from "prop-types";
import { ArticleContainer } from "./styles";

const Article = ({ children, isCenter = false, isReverse = false }) => {
  return (
    <ArticleContainer isCenter={isCenter} isReverse={isReverse}>
      {children}
    </ArticleContainer>
  );
};
Article.propTypes = {
  children: PropTypes.any.isRequired,
  isCenter: PropTypes.bool,
  isReverse: PropTypes.bool,
};
export default Article;
