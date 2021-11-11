import styled from 'styled-components'

const Timeline = () => {
  return <StyledTimeline>
    <Item>
      <Positioner className="left">
        <FlagWrapper>
          <Flag>Freelancer</Flag>
          <TimeWrapper><Time>2013-present</Time></TimeWrapper>
        </FlagWrapper>
        <Description>My current employment. Way better than the position before!</Description>
      </Positioner>
    </Item>

    <Item>
      <Positioner className="right">
        <FlagWrapper>
          <Flag>Apple Inc.</Flag>
          <TimeWrapper><Time>2011-2013</Time></TimeWrapper>
        </FlagWrapper>
        <Description>My first employer. All the stuff I've learned and projects I've been working on.</Description>
      </Positioner>
    </Item>

    <Item>
      <Positioner className="left">
        <FlagWrapper>
          <Flag>Harvard University</Flag>
          <TimeWrapper><Time>2008-2011</Time></TimeWrapper>
        </FlagWrapper>
        <Description>A description of all the lectures and courses I have taken and my final degree?</Description>
      </Positioner>
    </Item>

  </StyledTimeline>
}

export default Timeline

const StyledTimeline = styled.ul`
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;

  &:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 6px;
    height: 100%;
    margin-left: -3px;
    background: rgb(80, 80, 80);
    background: -moz-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30, 87, 153, 1)), color-stop(100%, rgba(125, 185, 232, 1)));
    background: -webkit-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -o-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -ms-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);

    z-index: 5;
  }

  @media(max-width: 660px) {
    width: 100%;
    padding: 4em 0 1em 0;
  }
`

const Item = styled.li`
  padding: 1em 0;

  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  @media(max-width: 660px) {
    padding: 2em 0;
  }
`

const FlagWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;


  @media(max-width: 660px) {
    text-align: center;
  }
`

const Flag = styled.span`
  position: relative;
  display: inline;
  background: #37474f;
  padding: 6px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  text-align: left;

  &:before {
    position: absolute;
    top: 50%;
    right: -40px;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -10px;
    background: #fff;
    border-radius: 10px;
    border: 4px solid rgb(255, 80, 80);
    z-index: 10;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-width: 8px;
    pointer-events: none;
  }

  @media(max-width: 660px) {
    z-index: 15;

    &:before {
      top: -30px;
      left: 50% !important;
      margin-left: -9px;
    }

    &:after {
      left: 50% !important;
      top: -8px;
      margin-left: -8px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: #37474f;
      border-width: 8px;
      pointer-events: none;
    }
  }
`

const TimeWrapper = styled.span`
  display: inline;

  line-height: 1em;
  font-size: 0.66666em;
  color: rgb(250, 80, 80);
  vertical-align: middle;

  @media(max-width: 660px) {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
    float: none !important;
  }
`

const Time = styled.span`
  display: inline-block;
  padding: 4px 6px;
  background: #445963;
  font-weight: 500;
`

const Description = styled.div`
  margin: 1em 0.75em 0 0;
  color: #fff;
  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;

  @media(max-width: 660px) {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;
    background: #445963;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);

    z-index: 15;
  }

  @media(min-width: 440px) and (max-width: 660px) {
    margin: 1em 4em 0 4em;
  }
`

const Positioner = styled.div`
  position: relative;
  width: 300px;

  &.left {
    float: left;
    text-align: right;
  }

  &.right {
    float: right;
  }

  &.left ${Flag} {
    -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  }

  &.right ${Flag} {
    -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  }

  &.right ${Flag}:before {
    left: -40px;
  }

  &.right ${Flag}:after {
    right: 100%;
    border-right-color: #37474f;
  }

  &.left ${Flag}:after {
    left: 100%;
    border-left-color: #37474f;
  }

  &.right ${TimeWrapper} {
    float: right;
  }

  &.left ${TimeWrapper} {
    float: left;
  }

  &.right ${Description} {
    margin: 1em 0 0 0.75em;
  }


  @media(max-width: 660px) {
    float: none !important;
    width: 100%;

    text-align: center !important;
  }
`