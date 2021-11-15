import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useGet } from "./../../HTTP/HTTP";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./style";

const Product = () => {
  const { id } = useParams();
  const [endpoint, setEndpoint] = useState(`/${id}`);
  const { data } = useGet(endpoint);
  const [AllProducts, setAllProducts] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  const handlerBack = () => {
    history.push("/");
  };

  return (
    <>
      <h1>product detail</h1>
      <Card item className={classes.root} xs={12} md={8}>
        <CardActionArea>
          <CardMedia className={classes.media} image={data.image} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6">
              $ {data.price} <br />
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.content}>
          <Button size="small" color="primary" onClick={handlerBack}>
            Volver
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
