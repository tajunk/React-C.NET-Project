/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray1, gray2, gray5 } from './Styles';
import { UserIcon } from './Icons';
import { ChangeEvent, FC, useState, FormEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useAuth } from './Auth';

export const Header: FC<RouteComponentProps> = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const criteria = searchParams.get('criteria') || '';
  const { isAuthenticated, user, loading } = useAuth();

  // Get criteria value from deconstructing search object above and then use search in the input HTML tag
  // State is created to store the search value in, defaulting it to the criteria variable from above
  const [search, setSearch] = useState(criteria);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?criteria=${search}`);
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q & A
      </Link>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchInputChange}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 200px;
            height: 30px;
            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <div>
        {!loading &&
          (isAuthenticated ? (
            <div>
              <span>{user!.name}</span>
              <Link
                to={{ pathname: '/signout', state: { local: true } }}
                css={css`
                  font-family: ${fontFamily};
                  font-size: ${fontSize};
                  padding: 5px 10px;
                  background-color: transparent;
                  color: ${gray2};
                  text-decoration: none;
                  cursor: pointer;
                  span {
                    margin-left: 10px;
                  }
                  :focus {
                    outline-color: ${gray5};
                  }
                `}
              >
                <UserIcon />
                <span>Sign Out</span>
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              css={css`
                font-family: ${fontFamily};
                font-size: ${fontSize};
                padding: 5px 10px;
                background-color: transparent;
                color: ${gray2};
                text-decoration: none;
                cursor: pointer;
                span {
                  margin-left: 10px;
                }
                :focus {
                  outline-color: ${gray5};
                }
              `}
            >
              <UserIcon />
              <span>Sign In</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

// Wraps the Header component in the 'withRouter' function to get the history and location props passed into it
export const HeaderWithRouter = withRouter(Header);
