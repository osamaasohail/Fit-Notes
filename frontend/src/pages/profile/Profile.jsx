import { Box } from "../../components/Box";
import SideNavbar from "../../components/SideNavbar";
import { Col, Row } from "react-bootstrap";
import { H1, P } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Edit from "../../images/profiledit.svg";
import Tick from "../../images/tick.svg";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Delete from "../../images/delete.png";
import Plus from "../../images/plus.png";

import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusinessLicense, getIndividualLicense } from "../../service/redux/middleware/licenses";
import { useState } from "react";
import Moment from "react-moment";
import { Input } from "../../components/Input";
import { editBasicInfoThunk } from "../../service/redux/middleware/profile";

const Scrool = styled.div`
  height: 81vh;
  overflow-y: auto;
  padding: 0px 20px 10px 20px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [addDutyManager, setAddDutyManager] = useState(false);
  const [newDutyManagerName, setNewDutyManagerName] = useState("");
  const [newDutyManagerEmail, setNewDutyManagerEmail] = useState("");
  const [newDutyManagerLicenseNumber, setNewDutyManagerLicenseNumber] =
    useState("");
  const [newDutyManagerLicenseExpiry, setNewDutyManagerLicenseExpiry] =
    useState("");
  const [isNewDutyManagerAdded, setIsNewDutyManagerAdded] = useState(false);
  const [editBasicInfo, setEditBasicInfo] = useState(false);
  const [editLicenseInfo, setEditLicenseInfo] = useState(false);
  const [editGamingLicenseInfo, setEditGamingLicenseInfo] = useState(false);
  const [editDutyManagerInfo, setEditDutyManagerInfo] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [liquorLicenseNumber, setLiquorLicenseNumber] = useState("");
  const [liquorLicenseExpiry, setLiquorLicenseExpiry] = useState("");
  const [gamingLicenseNumber, setGamingLicenseNumber] = useState("");
  const [gamingLicenseExpiry, setGamingLicenseExpiry] = useState("");
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();
  const [userData] = useSelector((state) => {
    return [state.signin.signInData.data.user];
  });

  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (userData) {
      if (userData?.accountType === 1) {
        dispatch(getIndividualLicense()).then((res) => {
          setBusinessName(res?.payload?.data?.licenses[0]?.name);
          console.log("Individual profile :", res.payload.data.licenses[0])
          setProfile(res.payload.data.licenses[0]);
        });
      } else {
        dispatch(getBusinessLicense()).then((res) => {
          if (res.payload.data.licenses.length > 0) {
            setProfile(res.payload.data.licenses[0]);
            setBusinessName(res?.payload?.data?.licenses[0]?.businessName);
            setLiquorLicenseNumber(
              res?.payload?.data?.licenses[0]?.licenseNumber
            );
            setLiquorLicenseExpiry(res?.payload?.data?.licenses[0]?.expiryDate);
            setGamingLicenseNumber(
              res?.payload?.data?.licenses[0]?.gamingLicense
            );
            setGamingLicenseExpiry(
              res?.payload?.data?.licenses[0]?.gamingLicenseExpiry
            );
          }
        });
      }
    }
  }, [userData]);
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col
          style={
            isResponsive
              ? { padding: "0px", marginBottom: "30px" }
              : { padding: "0px" }
          }
          lg={2}
          md={3}
        >
          <SideNavbar />
        </Col>
        <Col
          className="d-flex justify-content-evenly "
          style={{ padding: "0px", flexDirection: "column" }}
          lg={10}
          md={9}
        >
          <Scrool>
            {/* <SideNavbar /> */}
            <Row
              style={{
                padding: isResponsive ? "0vw 0vw 0vw 1vw" : "0vw 10vw 0vw 1vw",
              }}
              className=" align-items-center "
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Basic Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Basic Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <Col md={5} sm={5} xs={5}>
                            <P color="black" weight="400">
                              Your Role
                            </P>
                          </Col>
                          <Col md={5} sm={5} xs={5}>
                            <P color="black" weight="300">
                              Business Name
                            </P>
                          </Col>
                          <Col md={2} sm={2} xs={2}>
                            <P color="black" weight="300">
                              Action
                            </P>
                          </Col>
                        </Row>
                      </div>
                      <Row
                        style={
                          isResponsive
                            ? {
                                padding: "12px 2px 12px 2px",
                                margin: "0px 20px 0px 0px",
                              }
                            : {
                                padding: "12px 30px 12px 20px",
                                margin: "0px 20px 0px 0px",
                              }
                        }
                      >
                        <Col className="mt-4" md={5} sm={5} xs={5}>
                          <P color="black" weight="400">
                            {profile?.role === 1
                              ? "Business Owner"
                              : "Duty Manager"}
                          </P>
                        </Col>
                        <Col className="mt-4" md={5} sm={5} xs={5}>
                          <Input
                            style={
                              editBasicInfo
                                ? { background: "none", color: "black" }
                                : { background: "none", color: "black" }
                            }
                            disabled={editBasicInfo ? false : true}
                            placeholder={profile?.name}
                            value={businessName}
                            onChange={(e) => {
                              setBusinessName(e.target.value);
                            }}
                          />
                        </Col>
                        <Col className="mt-4" md={2} sm={2} xs={2}>
                          {editBasicInfo ? (
                            <img
                              src={Tick}
                              alt="add"
                              onClick={() => {
                                if (businessName !== "") {
                                  dispatch(
                                    editBasicInfoThunk({
                                      name: businessName,
                                      userId: profile?.refUser,
                                    })
                                  ).then((res) => {
                                    dispatch(getBusinessLicense())
                                  });
                                  setEditBasicInfo(false);
                                }
                              }}
                            />
                          ) : (
                            <img
                              src={Edit}
                              alt="edit"
                              onClick={() => {
                                console.log("Edit basic info");
                                setEditBasicInfo(true);
                              }}
                            />
                          )}
                        </Col>
                        {/* <Col className="mt-4" md={1} sm={1} xs={1}>
                          <img src={Edit} />
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
            <Spacer height="10px" />
            {userData?.accountType == 2 && (
            <Row
              style={{
                padding: isResponsive ? "0vw 0vw 0vw 1vw" : "0vw 10vw 0vw 1vw",
              }}
              className=" align-items-center "
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Liquor Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Liquor Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <Col md={5} sm={5} xs={5}>
                            <P color="black" weight="400">
                              License Number
                            </P>
                          </Col>
                          <Col md={5} sm={5} xs={5}>
                            <P color="black" weight="400">
                              Expiry Date
                            </P>
                          </Col>
                          <Col md={2} sm={2} xs={2}>
                            <P color="black" weight="300">
                              Action
                            </P>
                          </Col>
                        </Row>
                      </div>
                      <Row
                        style={
                          isResponsive
                            ? {
                                padding: "2px 2px 12px 2px",
                                margin: "0px 20px 0px 0px",
                              }
                            : {
                                padding: "12px 30px 12px 20px",
                                margin: "0px 20px 0px 0px",
                              }
                        }
                      >
                        <Col className="mt-4" md={5} sm={5} xs={5}>
                          <Input
                            style={
                              editLicenseInfo
                                ? { background: "none", color: "black" }
                                : { background: "none", color: "black" }
                            }
                            disabled={editLicenseInfo ? false : true}
                            placeholder={profile?.licenseNumber}
                            value={liquorLicenseNumber}
                            onChange={(e) => {
                              setLiquorLicenseNumber(e.target.value);
                            }}
                          />
                        </Col>
                        <Col className="mt-4" md={5} sm={5} xs={5}>
                          <P color="#EF3061" weight="300">
                            {editLicenseInfo ? (
                              <Input
                                style={
                                  editLicenseInfo
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                disabled={editLicenseInfo ? false : true}
                                type="date"
                                placeholder={profile?.expiryDate}
                                value={liquorLicenseExpiry}
                                onChange={(e) => {
                                  setLiquorLicenseExpiry(e.target.value);
                                }}
                              />
                            ) : (
                              <Moment format="DD/MM/YYYY">
                                {profile?.expiryDate}
                              </Moment>
                            )}

                            {/* <Moment format="DD/MM/YYYY">
                              {profile?.expiryDate}
                              dfdsfdss
                            </Moment> */}
                          </P>
                        </Col>
                        <Col className="mt-4" md={2} sm={2} xs={2}>
                          {editLicenseInfo ? (
                            <img
                              src={Tick}
                              alt="add"
                              onClick={() => {
                                if (
                                  liquorLicenseExpiry !== "" &&
                                  liquorLicenseNumber !== ""
                                ) {
                                  dispatch(
                                    editBasicInfoThunk({
                                      licenseNumber: liquorLicenseNumber,
                                      expiryDate: liquorLicenseExpiry,
                                      userId: profile?.refUser,
                                    })
                                  ).then((res) => {});
                                  dispatch(getBusinessLicense())
                                  setEditLicenseInfo(false);
                                }
                              }}
                            />
                          ) : (
                            <img
                              src={Edit}
                              alt="edit"
                              onClick={() => {
                                setEditLicenseInfo(true);
                              }}
                            />
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
            )}
            {userData?.accountType == 2 && profile?.gamingLicense !== "" ? (
              <>
                <Spacer height="10px" />
                <Row
                  style={{
                    padding: isResponsive
                      ? "0vw 0vw 0vw 1vw"
                      : "0vw 10vw 0vw 1vw",
                  }}
                  className=" align-items-center "
                >
                  <Col md={2}>
                    <H1 color="black" fontSize="24px" weight="500">
                      Gaming Info
                    </H1>
                  </Col>
                  <Col md={7}>
                    <Box
                      width={isResponsive ? "100%" : "55vw"}
                      padding={
                        isResponsive
                          ? "41px 20px 20px 20px"
                          : "41px 20px 52px 64px"
                      }
                    >
                      <Row className="align-items-center">
                        {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Liquor Info
                  </H1>
                </Col> */}
                        <Col md={12}>
                          <div>
                            <Row
                              style={
                                isResponsive
                                  ? {
                                      background: "#F2F2F2",
                                      padding: "12px 2px 12px 2px",
                                      margin: "0px 20px 0px 0px",
                                      borderRadius: "8px",
                                    }
                                  : {
                                      background: "#F2F2F2",
                                      padding: "12px 30px 12px 20px",
                                      margin: "0px 20px 0px 0px",
                                      borderRadius: "8px",
                                    }
                              }
                            >
                              <Col md={5} sm={5} xs={5}>
                                <P color="black" weight="400">
                                  License Number
                                </P>
                              </Col>
                              <Col md={5} sm={5} xs={5}>
                                <P color="black" weight="400">
                                  Expiry Date
                                </P>
                              </Col>
                              <Col md={2} sm={2} xs={2}>
                                <P color="black" weight="300">
                                  Action
                                </P>
                              </Col>
                            </Row>
                          </div>
                          <Row
                            style={
                              isResponsive
                                ? {
                                    padding: "2px 2px 12px 2px",
                                    margin: "0px 20px 0px 0px",
                                  }
                                : {
                                    padding: "12px 30px 12px 20px",
                                    margin: "0px 20px 0px 0px",
                                  }
                            }
                          >
                            <Col className="mt-4" md={5} sm={5} xs={5}>
                              <Input
                                style={
                                  editGamingLicenseInfo
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                disabled={editGamingLicenseInfo ? false : true}
                                placeholder={profile?.gamingLicense}
                                value={gamingLicenseNumber}
                                onChange={(e) => {
                                  setGamingLicenseNumber(e.target.value);
                                }}
                              />
                            </Col>
                            <Col className="mt-4" md={5} sm={5} xs={5}>
                              {editGamingLicenseInfo ? (
                                <Input
                                  style={
                                    editGamingLicenseInfo
                                      ? { background: "none", color: "black" }
                                      : { background: "none", color: "black" }
                                  }
                                  disabled={
                                    editGamingLicenseInfo ? false : true
                                  }
                                  type="date"
                                  placeholder={profile?.gamingLicenseExpiry}
                                  value={gamingLicenseExpiry}
                                  onChange={(e) => {
                                    setGamingLicenseExpiry(e.target.value);
                                  }}
                                />
                              ) : (
                                <P color="#EF3061" weight="300">
                                  <Moment format="DD/MM/YYYY">
                                    {profile?.gamingLicenseExpiry}
                                  </Moment>
                                </P>
                              )}
                            </Col>
                            <Col className="mt-4" md={2} sm={2} xs={2}>
                              {editGamingLicenseInfo ? (
                                <img
                                  src={Tick}
                                  alt="add"
                                  onClick={() => {
                                    if (
                                      gamingLicenseNumber !== "" &&
                                      gamingLicenseExpiry !== ""
                                    ) {
                                      dispatch(
                                        editBasicInfoThunk({
                                          gamingLicense: gamingLicenseNumber,
                                          gamingLicenseExpiry:
                                            gamingLicenseExpiry,
                                          userId: profile?.refUser,
                                        })
                                      ).then((res) => {
                                        dispatch(getBusinessLicense())
                                        setEditGamingLicenseInfo(false);
                                      });
                                      
                                    }
                                  }}
                                />
                              ) : (
                                <img
                                  src={Edit}
                                  alt="edit"
                                  onClick={() => {
                                    console.log("Edit basic info");
                                    setEditGamingLicenseInfo(true);
                                  }}
                                />
                              )}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Box>
                  </Col>
                </Row>
              </>
            ) : null}

            <Spacer height="10px" />
            <Row
              style={{
                padding: isResponsive ? "0vw 0vw 0vw 1vw" : "0vw 10vw 0vw 1vw",
              }}
              className=" align-items-center"
            >
              <Col md={2}>
                <H1 color="black" fontSize="24px" weight="500">
                  Manager Info
                </H1>
              </Col>
              <Col md={7}>
                <Box
                  width={isResponsive ? "100%" : "55vw"}
                  padding={
                    isResponsive ? "41px 20px 20px 20px" : "41px 20px 52px 64px"
                  }
                >
                  <Row className="align-items-center">
                    {/* <Col md={5}>
                  <H1 color="black" fontSize="24px" weight="500">
                    Manager Info
                  </H1>
                </Col> */}
                    <Col md={12}>
                      <div>
                        <Row
                          style={
                            isResponsive
                              ? {
                                  background: "#F2F2F2",
                                  padding: "12px 2px 12px 2px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                  overflow: "auto",
                                }
                              : {
                                  background: "#F2F2F2",
                                  padding: "12px 30px 12px 20px",
                                  margin: "0px 20px 0px 0px",
                                  borderRadius: "8px",
                                  overflow: "auto",
                                }
                          }
                        >
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Name
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Email
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              License Number
                            </P>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <P color="black" weight="400">
                              Expiry
                            </P>
                          </Col>
                        </Row>
                      </div>
                      {profile?.dutyManagers?.map((manager) => {
                        return (
                          <Row
                            style={
                              isResponsive
                                ? {
                                    padding: "16px 2px 12px 2px",
                                    margin: "0px 20px 0px 0px",
                                  }
                                : {
                                    padding: "16px 30px 12px 20px",
                                    margin: "0px 20px 0px 0px",
                                  }
                            }
                          >
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                disabled={edit ? false : true}
                                placeholder={manager?.name}
                              />
                              {/* <P color="black" weight="400">
                            {manager?.name}
                            asad
                          </P> */}
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                disabled={edit ? false : true}
                                placeholder={manager?.email}
                              />
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                disabled={edit ? false : true}
                                placeholder={manager?.licenseNumber}
                              />
                              {/* <P color="black" weight="400">
                            {manager?.licenseNumber}
                          </P> */}
                            </Col>
                            <Col
                              className="d-flex align-items-center"
                              md={3}
                              sm={3}
                              xs={3}
                            >
                              {edit ? (
                                <Input
                                  className="textPlaceholder"
                                  style={
                                    edit
                                      ? { background: "none", color: "black" }
                                      : { background: "none", color: "black" }
                                  }
                                  disabled={edit ? false : true}
                                  type="date"
                                  placeholder={manager?.expiryDate}
                                />
                              ) : (
                                <Moment format="DD/MM/YYYY">
                                  {profile?.gamingLicenseExpiry}
                                </Moment>
                              )}
                              <img
                                style={{ marginLeft: "10px" }}
                                width={20}
                                height={20}
                                src={Delete}
                              />
                            </Col>
                          </Row>
                        );
                      })}
                      {addDutyManager ? (
                        <>
                          <Row
                            style={
                              isResponsive
                                ? {
                                    padding: "16px 2px 12px 2px",
                                    margin: "0px 20px 0px 0px",
                                  }
                                : {
                                    padding: "16px 30px 12px 20px",
                                    margin: "0px 20px 0px 0px",
                                  }
                            }
                          >
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                placeholder={"Enter Name"}
                                value={newDutyManagerName}
                                onChange={(e) => {
                                  setNewDutyManagerName(e.target.value);
                                  setIsNewDutyManagerAdded(true);
                                }}
                              />
                              {/* <P color="black" weight="400">
                            {manager?.name}
                            asad
                          </P> */}
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                placeholder={"Enter  Email"}
                                value={newDutyManagerEmail}
                                onChange={(e) => {
                                  setNewDutyManagerEmail(e.target.value);
                                  setIsNewDutyManagerAdded(true);
                                }}
                              />
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                              <Input
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                placeholder={"Enter Licence"}
                                value={newDutyManagerLicenseNumber}
                                onChange={(e) => {
                                  setNewDutyManagerLicenseNumber(
                                    e.target.value
                                  );
                                  setIsNewDutyManagerAdded(true);
                                }}
                              />
                              {/* <P color="black" weight="400">
                            {manager?.licenseNumber}
                          </P> */}
                            </Col>
                            <Col
                              className="d-flex align-items-center"
                              md={3}
                              sm={3}
                              xs={3}
                            >
                              <Input
                                className="textPlaceholder"
                                style={
                                  edit
                                    ? { background: "none", color: "black" }
                                    : { background: "none", color: "black" }
                                }
                                type="date"
                                value={newDutyManagerLicenseExpiry}
                                onChange={(e) => {
                                  setNewDutyManagerLicenseExpiry(
                                    e.target.value
                                  );
                                  setIsNewDutyManagerAdded(true);
                                }}
                                // placeholder= {manager?.expiryDate}
                              />
                              <img
                                style={{
                                  marginLeft: "10px",
                                  cursor: "pointer",
                                }}
                                alt="plus"
                                width={20}
                                height={20}
                                src={Plus}
                                onClick={() => {
                                  if (
                                    newDutyManagerName !== "" &&
                                    newDutyManagerEmail !== "" &&
                                    newDutyManagerLicenseNumber !== "" &&
                                    newDutyManagerLicenseExpiry !== ""
                                  ) {
                                    profile?.dutyManagers.push({
                                      name: newDutyManagerName,
                                      email: newDutyManagerEmail,
                                      licenseNumber:
                                        newDutyManagerLicenseNumber,
                                      expiryDate: newDutyManagerLicenseExpiry,
                                    });
                                    setNewDutyManagerName("");
                                    setNewDutyManagerEmail("");
                                    setNewDutyManagerLicenseNumber("");
                                    setNewDutyManagerLicenseExpiry("");
                                    setAddDutyManager(false);
                                    setProfile(profile);
                                  }
                                }}
                              />
                            </Col>
                          </Row>
                        </>
                      ) : (
                        ""
                      )}
                    </Col>
                    {edit ? (
                      <Button
                        style={{
                          width: "100%",
                          padding: "9px 14px",
                          background: "black",
                          color: "white",
                          fontSize: "14px",
                          borderRadius: "3px",
                        }}
                        disabled={addDutyManager ? true : false}
                        onClick={() => {
                          setAddDutyManager(true);
                        }}
                      >
                        {" "}
                        Add Duty Manager
                      </Button>
                    ) : (
                      ""
                    )}
                  </Row>
                </Box>
              </Col>
            </Row>
          </Scrool>
          <Spacer />
          <Row
            style={{
              width: "100%",
              margin: "0",
              padding: isResponsive ? "0vw 1vw 0vw 1vw" : "0vw 10vw 0vw 13vw",
            }}
          >
            <Col md={12}>
              <Button
                onClick={() => {
                  if (edit) {
                    // caallbackendfunction here
                  } else {
                    setEdit(true);
                  }
                }}
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  background: "black",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "3px",
                }}
              >
                {edit ? "Update" : "Edit"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
