import './Pagination.scss';
import { Pagination } from 'semantic-ui-react';
import { setActivePage } from '../store/moviesSlice';
import { useDispatch } from 'react-redux';

interface PaginationComponentProps {
  totalPages: number;
}

export default function PaginationComponent({
  totalPages,
}: PaginationComponentProps) {
  const dispatch = useDispatch();

  return (
    <div className='pagination'>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalPages}
        onPageChange={(_, data) => {
          dispatch(setActivePage(data.activePage));
        }}
      />
    </div>
  );
}
