import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: blueGrey[50],
  },
}));

const RepoItem = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt className>
            NN
          </Avatar>
        }
        title="this is title"
        subtitle="this is subtitle"
      />
      <CardContent></CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default RepoItem;
