import React from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import {
  useGmailTabsStyles,
  useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs'
import Inbox from '@material-ui/icons/Inbox'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import Description from './Description'
import Allreview from './Allreview'

const indicatorColors = ['#d93025', '#188038']

const GmailTabsStyle = () => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const tabsStyles = useGmailTabsStyles({ indicatorColors })
  const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] })
  const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] })
  return (
    <div>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
        TabIndicatorProps={{
          children: <div className={`MuiIndicator-${tabIndex}`} />,
        }}
      >
        <Tab
          classes={tabItem1Styles}
          disableTouchRipple
          label={'Description'}
          icon={<Inbox />}
        />
        <Tab
          classes={tabItem2Styles}
          disableTouchRipple
          label={'Reviews'}
          icon={<LocalOfferIcon />}
        />
      </Tabs>
      {tabIndex === 0 && <Description />}
      {tabIndex === 1 && <Allreview />}
    </div>
  )
}

export default GmailTabsStyle
