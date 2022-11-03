import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Paper from '@mui/material/Paper';
import { LinearProgress } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { StringList } from '../../constants/StringList';
import Footer from '../Footer/Footer';

import TokenService from '../../services/TokenService';
import { Story } from '../Story/Story';
import StoryGrid from '../StoryGrid/StoryGrid';

const Network = () => {
  const [networkValue, setNetworkValue] = useState({});
  const { goerliEffect, tokenRows, loading, tokenLoading, chipClick } = TokenService({
    setNetworkValue,
  });

  goerliEffect();

  return (
    <Fragment>
      <main>
        <Container>
          <Grid container>
            <Grid item xs={1}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#757575',
                }}
                to='/'
              >
                <ArrowBackIosIcon />
              </Link>
            </Grid>
            <Grid item xs={11}>
              <Typography align='center' color='textSecondary' fontWeight={700}>
                {StringList.NETWORK_LABEL}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid>
            {loading && tokenRows.length === 0 && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography variant='subtitle2'>loading token metadata</Typography>
                  <LinearProgress color='primary' />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant='rectangular' height={200} />
                </Grid>
              </Fragment>
            )}
            {tokenLoading && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography variant='subtitle2'>loading token metadata</Typography>
                  <LinearProgress color='primary' />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant='rectangular' height={200} />
                </Grid>
              </Fragment>
            )}
            {tokenRows.length > 0 && !tokenLoading && (
              <Fragment>
                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Typography variant='body1' mt={2} mb={2} p={2}>
                      {StringList.NETWORK_COPY}
                    </Typography>
                  </Paper>
                </Grid>

                {/* DISPLAY PANEL */}
                <Grid item xs={12}>
                  <StoryGrid networkValue={networkValue} />
                </Grid>
                {/* DISPLAY PANEL */}

                <Grid
                  item
                  xs={12}
                  bgcolor='#eceff1'
                  border='.05rem solid #999'
                  mt={2}
                  borderRadius={1}
                >
                  <Timeline position='alternate'>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant='body2' color='textSecondary'>
                          1/1/2022
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot>
                          <AccountBalanceIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper
                          elevation={3}
                          sx={{
                            padding: 2,
                          }}
                        >
                          <Typography variant='h6' component='h1'>
                            Financial Data
                          </Typography>
                          <Story
                            cTokenId='1000'
                            cLabel='Story 1'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1001'
                            cLabel='Story 2'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1002'
                            cLabel='Story 3'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant='body2' color='textSecondary'>
                          2/1/2022
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color='primary'>
                          <AttachMoneyIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper
                          elevation={3}
                          sx={{
                            padding: 2,
                          }}
                        >
                          <Typography variant='h6' component='h1'>
                            Systems Data
                          </Typography>
                          <Story
                            cTokenId='1003'
                            cLabel='Story 4'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1004'
                            cLabel='Story 5'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1005'
                            cLabel='Story 6'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant='body2' color='textSecondary'>
                          4/1/2022
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color='primary' variant='outlined'>
                          <BusinessIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper
                          elevation={3}
                          sx={{
                            padding: 2,
                          }}
                        >
                          <Typography variant='h6' component='h1'>
                            Communication Data
                          </Typography>
                          <Story
                            cTokenId='1006'
                            cLabel='Story 7'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1007'
                            cLabel='Story 8'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                          <Story
                            cTokenId='1008'
                            cLabel='Story 9'
                            cFunc={chipClick}
                            networkValue={networkValue}
                          />
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
              </Fragment>
            )}
            {!loading && tokenRows.length === 0 && <div>NO BLOCKCHAIN CONNECTION</div>}
          </Grid>
          <Footer />
        </Container>
      </main>
    </Fragment>
  );
};

export default Network;
