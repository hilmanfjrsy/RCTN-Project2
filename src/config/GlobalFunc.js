import axios from "axios";
import { toast } from "react-toastify";
import { GlobalVar } from "./GlobalVar";

export async function getRequest(path) {
  try {
    const response = await axios.get("https://fakestoreapi.com/" + path);
    if (response) {
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored",
    });
  }
}

export async function postRequest(path, data) {
  try {
    const response = await axios.post("https://fakestoreapi.com/" + path, data);
    if (response) {
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored",
    });
  }
}

export const getRating = (total = 0, count = 0, fontSize = 10) => {
  function getValue(value) {
    switch (value) {
      case 0:
        return "far fa-star";
      case 50:
        return "fas fa-star-half-alt";
      case 100:
        return "fas fa-star";
    }
  }

  function getStars(value) {
    if (value > 0 && value < 1) {
      return [50, 0, 0, 0, 0];
    } else if (value == 1) {
      return [100, 0, 0, 0, 0];
    } else if (value > 1 && value < 2) {
      return [100, 50, 0, 0, 0];
    } else if (value == 2) {
      return [100, 100, 0, 0, 0];
    } else if (value > 2 && value < 3) {
      return [100, 100, 50, 0, 0];
    } else if (value == 3) {
      return [100, 100, 100, 0, 0];
    } else if (value > 3 && value < 4) {
      return [100, 100, 100, 50, 0];
    } else if (value == 4) {
      return [100, 100, 100, 100, 0];
    } else if (value > 4 && value < 5) {
      return [100, 100, 100, 100, 50];
    } else if (value >= 5) {
      return [100, 100, 100, 100, 100];
    } else {
      return [0, 0, 0, 0, 0];
    }
  }

  return (
    <div>
      <span style={{ fontSize:fontSize+3,fontWeight:'bold',marginRight:5, color: GlobalVar.goldColor }}>{total}</span>
      {getStars(total).map((value, idx) => {
        return (
          <li key={idx} className="list-inline-item m-0">
            <i
              className={getValue(value)}
              style={{ fontSize, color: GlobalVar.goldColor }}
            ></i>
          </li>
        );
      })}
      <span style={{ fontSize, color: GlobalVar.greyColor, marginLeft: 5 }}>
        ({count})
      </span>
    </div>
  );
};

export default function Loading() {
  return (
    <>
      <span class="spinner-border spinner-border-sm" aria-hidden="true" />
      &nbsp;&nbsp;
    </>
  );
}
