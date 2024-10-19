import {parseISO, formatDistanceToNow} from 'date-fns'

const TimeAge = ({timestamp}) => {
    let timeage=''

    if(timestamp)
    {
        const date = parseISO(timestamp)
        const timeperiod = formatDistanceToNow(date)
        timeage = `${timeperiod} ago`
    }
    return(
        <span title={timestamp}>
            &nbsp; <i>{timeage} </i>
        </span>
    )
}

export default TimeAge