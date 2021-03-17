import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Colors } from "../../atoms/style-guide";

export const Bell = () => {
  return <FontAwesomeIcon icon={faBell} color={Colors.UI00} />
}