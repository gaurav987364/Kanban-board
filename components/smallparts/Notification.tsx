import React from 'react';
import { Button } from '../ui/button';
import { BellIcon } from 'lucide-react';

const Notification:React.FC = () => {
  return (
    <div>
        <Button variant="link">
            <span><BellIcon size={32}/></span>
        </Button>
    </div>
  )
}

export default Notification