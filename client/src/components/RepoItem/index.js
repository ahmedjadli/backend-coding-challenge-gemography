import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  makeStyles,
  IconButton,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { blueGrey, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: blueGrey[50],
  },
  valign: {
    display: "inline-flex",
    verticalAlign: "middle",
    alignItems: "center",
  },
  content: {
    backgroundColor: blueGrey[100],
    margin: theme.spacing(0),
  },
}));

const RepoItem = ({ repo, color, abv, name }) => {
  const classes = useStyles(color);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={name} style={{ backgroundColor: color }}>
            {abv}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>name:</b> {repo.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>owner:</b> {repo.owner.login}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {" "}
          <Link href={repo.url} target="_blank">
            Go to repository
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container>
          <Grid item className={classes.valign}>
            <StarRoundedIcon style={{ color: yellow[600] }} />
            {repo.stargazers_count}
          </Grid>
          <Grid item className={classes.valign}>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            {repo.stargazers_count}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RepoItem;
