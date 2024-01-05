import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Skeleton, TableHead } from "@mui/material";
import { Shop } from "./types/Shop";
import useCustomMediaQuery from "./hooks/useCustomMediaQuery";

const SkeletonRow = () => {
  const { isDesktop } = useCustomMediaQuery();
  return (
    <TableRow>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      {isDesktop && (
        <>
          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

function TablePaginationActions(props: any) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const thaiMonthMapping = {
  "ม.ค.": "มกราคม",
  "ก.พ.": "กุมภาพันธ์",
  "มี.ค.": "มีนาคม",
  "เม.ย.": "เมษายน",
  "พ.ค.": "พฤษภาคม",
  "มิ.ย.": "มิถุนายน",
  "ก.ค.": "กรกฎาคม",
  "ส.ค.": "สิงหาคม",
  "ก.ย.": "กันยายน",
  "ต.ค.": "ตุลาคม",
  "พ.ย.": "พฤศจิกายน",
  "ธ.ค.": "ธันวาคม"
}

const buildDate = (date: string) => {
    if (!date) return date;
    if (date && date.indexOf('-') === -1) {
      let dateText = "";
      Object.entries(thaiMonthMapping).forEach(([key, value], index) => {
        const found = date.indexOf(key) >= 0;
        if (found) {
          dateText = date.replace(key, " " + value);
        }
      });
      return dateText;
    }
    if (date && date.indexOf('-') === 0 && date.length === 1) {
      return date;
    }

    const dateSplit = date.split('-')
    console.log(new Date(parseInt(dateSplit[2])-543, parseInt(dateSplit[1]), parseInt(dateSplit[0])))
    return new Date(parseInt(dateSplit[2])-543, parseInt(dateSplit[1]), parseInt(dateSplit[0])).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function ShopTable({
  data,
  isLoading,
}: {
  data: Shop[];
  isLoading: boolean;
}) {
  const { isDesktop } = useCustomMediaQuery();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setPage(0);
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 205 }}>
              เลขประจำตัวผู้เสียภาษีอากร
            </TableCell>
            <TableCell style={{ width: 250 }} align="left">
              ชื่อผู้เสียภาษี
            </TableCell>
            <TableCell style={{ width: 120 }} align="center">
              ใบกำกับภาษี
            </TableCell>
            {isDesktop && (
              <>
                <TableCell style={{ width: 200 }} align="left">
                  ประเภทกิจการ
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  เริ่มตั้งแต่
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  สิ้นสุด
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        {isLoading && (
          <TableBody>
            {Array(10)
              .fill(0)
              .map((_, index) => {
                return <SkeletonRow key={index} />;
              })}
          </TableBody>
        )}
        {!isLoading && (
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.tax}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell style={{ textAlign: "center" }} align="left">
                  {row.isVat === "Y" ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <CancelIcon style={{ color: "red" }} />
                  )}
                </TableCell>
                {isDesktop && (
                  <>
                    <TableCell align="left">{row.isicName}</TableCell>
                    <TableCell align="left">{buildDate(row.startDateTh)}</TableCell>
                    <TableCell align="left">{buildDate(row.endDateTh)}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
