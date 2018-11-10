import moment from 'moment'

export const convertSecondsTimeStampToDate = sec => {
  let t = new Date(1970, 0, 1) // Let using Epoch notation that is based in 1970
  t.setSeconds(sec)
  return t
}

export const formatDateToDDMMYYYYHHMM = date => date ? moment(date).format('DD-MM-YYYY HH:mm') : null

export const formatSecondsToDateDDMMYYYYHHMM = sec => {
  const date = convertSecondsTimeStampToDate(sec)
  return formatDateToDDMMYYYYHHMM(date)
}

