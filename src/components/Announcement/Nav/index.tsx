import React from 'react';

interface ItemProps {
  label: string;
  active?: boolean;
}

const NavItem = ({ item }: { item: ItemProps }) => {
  return (
    <button
      className={`border-none hover:text-slate-600 ${
        item.active ? 'text-slate-900' : ''
      }`}>
      <a href='/'>{item.label}</a>
    </button>
  );
};

export default NavItem;
