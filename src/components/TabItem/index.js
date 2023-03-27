import './index.css'

const TabItem = props => {
  const {tabList, findTabApps} = props
  const {displayText, tabId} = tabList

  const onTabClick = () => {
    findTabApps(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className="tab-name"
        key={tabId}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

/*


*/
