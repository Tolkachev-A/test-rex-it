import { Box, Container, Grid, Typography, Link } from '@mui/material';
import './hero.scss';

export const Hero = () => {
  return (
    <Box
      className="hero-section"
      sx={() => ({
        padding: '50px 0',
        height: '100vh',
      })}
    >
      <Box className="hero-section__text-bg">
        <Container className="hero-section__text" maxWidth="md">
          <Grid container>
            <Grid item md={6} xs={12} />
            <Grid item md={6} xs={12}>
              <Typography
                component="h2"
                className="hero-section__title"
                sx={theme => ({
                  fontSize: '63px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  ml: '-40px',
                  [theme.breakpoints.down('md')]: {
                    ml: 0,
                    fontSize: '33px',
                    textAlign: 'center',
                  },
                })}
              >
                mostly tastes with freshes
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Typography
                component="p"
                sx={theme => ({
                  pr: '100px',
                  textAlign: 'right',
                  fontSize: '18px',
                  lineHeight: '30px',
                  [theme.breakpoints.down('md')]: {
                    textAlign: 'center',
                    pr: 0,
                    pt: '20px',
                  },
                })}
              >
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
              sx={theme => ({
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'flex-end',
                [theme.breakpoints.down('md')]: {
                  justifyContent: 'center',
                  pt: '20px',
                },
              })}
            >
              <Link className="hero__btn" href="/#">
                TASTE IT
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
