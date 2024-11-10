const TableItems = ({ tableItems }) => {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className=" py-4 lg:text-[20px] md:text-[16px] text-[14px] text-wrap md:text-nowrap font-normal text-gray-900 whitespace-nowrap  "
      >
        {tableItems.title}
      </th>
      <td className=" py-4 text-center text-[14px] sm:text-[16px] font-bold text-black ">
        {tableItems.firstItem}
      </td>
      <td className=" py-4 text-center text-[14px] sm:text-[16px] font-bold text-black ">
        {tableItems.secondItem}
      </td>
    </tr>
  );
};

export default TableItems;
