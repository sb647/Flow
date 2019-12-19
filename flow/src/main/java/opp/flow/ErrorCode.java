package opp.flow;

public enum ErrorCode {
	ERROR_CODE_0, //everything is good
	ERROR_CODE_1, //wrong username or password
	ERROR_CODE_2, //username taken
	ERROR_CODE_3, //unable to save doctor or coach image
	ERROR_CODE_4, //approvedByAdmin is false
	ERROR_CODE_5, //registration request from doctor or coach approved
	ERROR_CODE_6 //registration request from doctor or coach denied
}
 