import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)"
  },
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around'
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}))
const Banner = () => {
  const classes = useStyles();
  return <div className={classes.banner}>
    <Container className={classes.container}>
      <div className={classes.tagline}>
        <Typography
          variant="h2"
          style={{
            fontWeight: 'bold',
            marginBottom: 15,
            fontFamily: 'Montserrat'
          }}
        >
          Crypto Hunter
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            color: 'darkgray',
            textTransform: 'capitalize',
            fontFamily: 'Montserrat'
          }}
        >
          Get all the Info regarding your favorite Crypto currency
        </Typography>
      </div>
    </Container>
  </div>
}

export default Banner;