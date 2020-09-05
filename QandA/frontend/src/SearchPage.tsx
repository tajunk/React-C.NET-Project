/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from './Page';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionsData';

export const SearchPage: FC<RouteComponentProps> = ({ location }) => {
  // Creates state to hold matched questions in the search
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  // Get the criteria query parameter
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('criteria') || '';

  // Invoke the search when this component first renders and when the search variable changes
  useEffect(() => {
    let cancelled = false;
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      if (!cancelled) {
        setQuestions(foundResults);
      }
    };
    doSearch(search);
    return () => {
      cancelled = true;
    };
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
