import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import './footer.scss';

export const Footer = () => {
  return (
    <Box className="footer">
      <Container className="hero-section__text" maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid
            item
            md={3}
            xs={12}
            sx={() => ({
              display: 'flex',
              mb: 4,
            })}
          >
            <LocalPhoneIcon />
            <Box
              sx={() => ({
                paddingLeft: '16px',
              })}
            >
              <Typography
                component="p"
                sx={() => ({
                  fontSize: '14px',
                  fontWeight: 500,
                  pb: 2,
                })}
              >
                PHONE
              </Typography>
              <Typography
                component="p"
                sx={() => ({
                  fontSize: '18px',
                })}
              >
                +48 (987) 345 - 6789
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={() => ({
              display: 'flex',
              mb: 4,
            })}
          >
            <RoomIcon />
            <Box
              sx={() => ({
                paddingLeft: '16px',
              })}
            >
              <Typography
                component="p"
                sx={() => ({
                  fontSize: '14px',
                  fontWeight: 500,
                  pb: 2,
                })}
              >
                ADDRESS
              </Typography>
              <Typography
                component="p"
                sx={() => ({
                  fontSize: '18px',
                })}
              >
                Cracker Inc. 10 Cloverfield Lane Berlin IL 10928, Germany
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            xs={12}
            sx={() => ({
              display: 'flex',
              mb: 4,
            })}
          >
            <ShareIcon />
            <Box
              sx={() => ({
                paddingLeft: '16px',
              })}
            >
              <Typography
                component="p"
                sx={() => ({
                  fontSize: '14px',
                  fontWeight: 500,
                  pb: 2,
                })}
              >
                SHARE
              </Typography>
              <Box
                component="p"
                className="footer__share-box"
                sx={() => ({
                  fontSize: '18px',
                  mt: 0,
                })}
              >
                <Link
                  href="/#"
                  sx={() => ({
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  })}
                >
                  <PinterestIcon
                    sx={() => ({
                      mr: 2,
                    })}
                  />
                  pinterest.com
                </Link>
                <Link
                  href="/#"
                  sx={() => ({
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  })}
                >
                  <FacebookIcon
                    sx={() => ({
                      mr: 2,
                    })}
                  />
                  facebook.com
                </Link>
                <Link
                  href="/#"
                  sx={() => ({
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  })}
                >
                  <InstagramIcon
                    sx={() => ({
                      mr: 2,
                    })}
                  />
                  instagram.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
