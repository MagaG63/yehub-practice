import { useAppDispatch, useAppSelector } from "../../../app/store/hooks"
import { setRate } from "../../../entities/questions/model/questionsSlice"
import ContainerItem from "../../../shared/ui/ContainerItem/ContainerItem"

const rate = [1,2,3,4,5]

export default function RateFilters() {

    const current = useAppSelector((state) => state.params.rate)
 const dispatch = useAppDispatch()

const toggleRate = (id: number) => {
 dispatch(setRate(id))
}

  return (
       <>
          {rate.map((item) => (
            <ContainerItem
              key={item}
              id={item}
              title={item + ''}
              active={current === item}
              onToggle={toggleRate}
            />
          ))}
          </>
  )
}
