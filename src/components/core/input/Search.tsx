"use client";
import { Search as SearchIcon } from "@mui/icons-material";
import {
	IconButton,
	InputAdornment,
	OutlinedInput,
	styled
} from "@mui/material";

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	borderRadius: 15,
	height: 33,
	"& .MuiInputBase-input::placeholder": {
		opacity: 1,
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderColor: theme.palette.common.white,
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: theme.palette.common.white,
		borderWidth: 1
	}
}));

type SearchProps = {
	hideIcon?: boolean;
};

export const Search = ({ hideIcon = false }: SearchProps) => {
	return (
		<CustomOutlinedInput
			id="outlined-basic"
			placeholder="Search programmes"
			endAdornment={
				hideIcon ? null :
					<InputAdornment position="end">
						<IconButton
							aria-label="search"
							onClick={() => undefined}
							onMouseDown={() => undefined}
							edge="end"
						>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
			}
			sx={{
				"& .MuiInputBase-input": {
					paddingLeft: hideIcon ? "100px" : "100px",
					paddingRight: hideIcon ? "90px" : "40px",
				},
			}}
		/>
	)
};

export default Search;