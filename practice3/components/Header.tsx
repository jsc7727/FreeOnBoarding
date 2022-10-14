import { AppBar, css, Toolbar, Tooltip } from '@mui/material';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          css={css`
            justify-content: space-between;
          `}
        >
          <Link href="/">eclipse</Link>
          <ThemeToggle></ThemeToggle>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
