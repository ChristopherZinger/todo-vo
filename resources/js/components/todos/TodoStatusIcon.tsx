import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

const coffeeLookup: IconLookup = { prefix: 'fal', iconName: 'coffee' }
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)

export const TodoStatusIcon = (props: { done: boolean }) =>
  <div>
    {props.done ? <FontAwesomeIcon icon={faCheckCircle} color="gray" /> : "pending"}
  </div>