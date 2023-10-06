// import React, { useState } from 'react';
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';

// function SingleSelectionDropdown() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleSelectionChange = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <button>Select an item</button>
//       </DropdownTrigger>
//       <DropdownMenu>
//         <DropdownItem
//           selected={selectedItem === 'Item 1'}
//           onClick={() => handleSelectionChange('Item 1')}
//         >
//           Item 1
//         </DropdownItem>
//         <DropdownItem
//           selected={selectedItem === 'Item 2'}
//           onClick={() => handleSelectionChange('Item 2')}
//         >
//           Item 2
//         </DropdownItem>
//         <DropdownItem
//           selected={selectedItem === 'Item 3'}
//           onClick={() => handleSelectionChange('Item 3')}
//         >
//           Item 3
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// export default SingleSelectionDropdown;
