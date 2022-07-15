import { Cat, GearSix, ListChecks, PaintRoller, UserCircle } from 'phosphor-react';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <div className='absolute bg-ctp-surface0 h-full w-full pt-2'>
      <div className='p-4 flex flex-col gap-5'>
        <MenuItem
          icon={<UserCircle weight='bold' />}
          text='My account'
          path='/account'
        />
        <MenuItem
          icon={<ListChecks weight='bold' />}
          text='My tasks'
          path='/tasks'
        />
        <MenuItem icon={<Cat weight='bold' />} text='Miau' path='/miau' />
        <MenuItem
          icon={<PaintRoller weight='bold' />}
          text='Change theme'
          path='/miau'
        />
        <MenuItem
          icon={<GearSix weight='bold' />}
          text='Settings'
          path='/settings'
        />
      </div>
    </div>
  );
};
