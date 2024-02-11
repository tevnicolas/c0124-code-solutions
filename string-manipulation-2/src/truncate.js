'use strict';
/* exported truncate */
const truncate = (length, string) => {
  return string.slice(0, length) + '...';
};
