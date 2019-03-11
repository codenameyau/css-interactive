import React from 'react';
import styled from 'styled-components/macro';
import { RaiseEyebrows } from './keyframes';

const PathEyebrows = styled.path`
	&.raise-eyebrows {
		animation: ${RaiseEyebrows} 2s;
		animation-iteration-count: infinite;
		animation-delay: 2s;
	}
`;

export const ClippySmirking = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.8 225">
      <g fill="none" fillRule="nonzero" transform="translate(.343)">
        <g id="FACES">
          <path
            fill="#fdbe33"
            d="M184 141.4c-1.8 1.7-2.6 4.2-2.1 6.6l11.7 68.2c.7 4.1-2 8-6.1 8.7-1.6.3-3.3 0-4.8-.8L121.4 192c-2.2-1.2-4.8-1.2-7 0l-61.3 32.2c-3.7 1.9-8.2.5-10.1-3.1-.8-1.5-1-3.1-.8-4.8L54 148c.4-2.4-.4-4.9-2.2-6.6L2.3 93.1c-3-2.9-3-7.6-.1-10.6 1.1-1.2 2.7-1.9 4.3-2.2l61.1-8.9 3.2-.4 4.2-.6c2.4-.4 4.5-1.9 5.6-4.1l13.9-28.1 2.3-4.7 14.4-29.3C113 .5 117.5-1 121.3.8c1.5.7 2.7 1.9 3.4 3.4l14.6 29.5 2.4 4.8 13.7 27.7c1.1 2.2 3.2 3.7 5.6 4.1l3.8.6 3.2.5 61.5 8.9c4.1.6 6.9 4.4 6.3 8.5-.2 1.6-1 3.1-2.2 4.3L184 141.4z"
          />
          <path
            fill="#fcae00"
            d="M117.2 191.1c-.9.1-1.9.4-2.7.8l-61.3 32.2c-3.7 1.9-8.2.5-10.1-3.1-.8-1.5-1-3.1-.8-4.8L54 148c.4-2.4-.4-4.9-2.2-6.6L2.3 93.1c-3-2.9-3-7.6-.1-10.6 1.1-1.2 2.7-1.9 4.3-2.2l68.5-10c2.4-.4 4.5-1.9 5.6-4.1l30.6-62c1.3-2.7 4.1-4.4 7.1-4.2-4.5 18.3-28.1 69.3-3.2 106.8 18.7 28.2 21.7 53.8 2.1 84.3z"
          />
          <path
            fill="#6936cf"
            d="M146.3 47H89.6c-1.7-.1-3-1.4-2.9-3.1 0-.4.1-.8.3-1.2l2-3.9 1.9-3.6 3.4-6.6c.5-1 1.5-1.6 2.6-1.6h42c1.1 0 2.1.6 2.6 1.6l2.2 4.3 1.1 2 .2.3 1.6 3.2.2.4.8 1.6 1.2 2.3c.7 1.5.1 3.3-1.3 4-.4.2-.8.3-1.2.3z"
          />
          <path fill="#6d3eff" d="M146.9 38.8H89l1.9-3.6H145l1.6 3.2z" />
          <path
            fill="#180054"
            d="M110.1 27c-.7 2.6-1.5 5.4-2.1 8.2-.3 1.2-.6 2.4-.8 3.6-.6 2.7-1.1 5.4-1.6 8.2h-16c-1.7-.1-2.9-1.5-2.9-3.1 0-.4.1-.8.3-1.2l2-3.9 1.9-3.6 3.4-6.6c.5-1 1.5-1.6 2.6-1.6h13.2z"
            opacity=".5"
          />
          <path
            fill="#037aff"
            d="M117.7 147.1c-28.5 0-51.7-26.7-51.7-59.5 0-5.5.7-10.9 1.9-16.2l2.1-.3c-1.3 5.4-2 11-2 16.5 0 31.7 22.3 57.4 49.7 57.4s49.7-25.8 49.7-57.4c-.1-5.6-.8-11.2-2.2-16.6l2.1.3c1.3 5.3 2 10.8 2 16.3.1 32.8-23.1 59.5-51.6 59.5z"
          />
          <circle fill="#dbdae0" cx="117.7" cy="151.5" r="6.9" />
          <path
            fill="#dbdae0"
            d="M110.8 151h5.1v13.3c0 .4-.4.8-.8.8h-3.5c-.4 0-.8-.4-.8-.8V151z"
          />
          <path
            fill="#272727"
            d="M110.8 154.5h2.8c.2 0 .3.1.3.3v1.4c0 .2-.1.3-.3.3h-2.8v-2zM123.6 115.4h-1 1zM136.7 107.4c-3.2 3.6-6.5 6.3-12.3 7.4-1.1.2-2.3.3-3.5.4H108.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.1c1.6 0 3.2-.1 4.7-.4 6-.9 11-4.9 13.4-10.4.6-.9-1-1.4-1.7-.6z"
          />
          <ellipse fill="#272727" cx="139" cy="86.8" rx="4.6" ry="6.8" />
          <ellipse fill="#272727" cx="96.2" cy="86.8" rx="4.6" ry="6.8" />
        </g>
        <g id="EYEBROWS">
          <PathEyebrows
            className="raise-eyebrows"
            fill="#272727"
            d="M102 76.5c.7.5.8 1.5.3 2.1-.4.5-1.1.8-1.8.5-1.8-.6-3.7-.9-5.5-.7-1.8.1-3.5.6-5.1 1.4-1.5.8-3.3-1.1-2.4-2.4 1.6-2.1 4-3.4 6.7-3.5 2.8-.1 5.6.8 7.8 2.6zM133.1 76.5c-.7.5-.9 1.4-.4 2.1.4.6 1.2.8 1.9.5 1.8-.6 3.6-.9 5.5-.7 1.8.1 3.5.6 5.1 1.4 1.5.8 3.3-1.1 2.4-2.4-1.6-2.1-4-3.4-6.7-3.5-2.8-.1-5.6.8-7.8 2.6z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ClippySmirking;
