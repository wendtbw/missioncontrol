//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var DAVUser_ttypes = require('./DAVUser_types');
var Vehicle_ttypes = require('./Vehicle_types');


var ttypes = require('./StatusReport_types');
//HELPER FUNCTIONS AND STRUCTURES

var StatusReport_is_registered_args = function(args) {
  this.authenticationToken = null;
  this.vehicleID = null;
  if (args) {
    if (args.authenticationToken !== undefined && args.authenticationToken !== null) {
      this.authenticationToken = args.authenticationToken;
    }
    if (args.vehicleID !== undefined && args.vehicleID !== null) {
      this.vehicleID = new DAVUser_ttypes.DAVUser(args.vehicleID);
    }
  }
};
StatusReport_is_registered_args.prototype = {};
StatusReport_is_registered_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authenticationToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.vehicleID = new DAVUser_ttypes.DAVUser();
        this.vehicleID.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

StatusReport_is_registered_args.prototype.write = function(output) {
  output.writeStructBegin('StatusReport_is_registered_args');
  if (this.authenticationToken !== null && this.authenticationToken !== undefined) {
    output.writeFieldBegin('authenticationToken', Thrift.Type.STRING, 1);
    output.writeString(this.authenticationToken);
    output.writeFieldEnd();
  }
  if (this.vehicleID !== null && this.vehicleID !== undefined) {
    output.writeFieldBegin('vehicleID', Thrift.Type.STRUCT, 2);
    this.vehicleID.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StatusReport_is_registered_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
StatusReport_is_registered_result.prototype = {};
StatusReport_is_registered_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

StatusReport_is_registered_result.prototype.write = function(output) {
  output.writeStructBegin('StatusReport_is_registered_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StatusReport_report_status_args = function(args) {
  this.authenticationToken = null;
  this.vehicleID = null;
  this.state = null;
  if (args) {
    if (args.authenticationToken !== undefined && args.authenticationToken !== null) {
      this.authenticationToken = args.authenticationToken;
    }
    if (args.vehicleID !== undefined && args.vehicleID !== null) {
      this.vehicleID = new DAVUser_ttypes.DAVUser(args.vehicleID);
    }
    if (args.state !== undefined && args.state !== null) {
      this.state = new Vehicle_ttypes.VehicleState(args.state);
    }
  }
};
StatusReport_report_status_args.prototype = {};
StatusReport_report_status_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authenticationToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.vehicleID = new DAVUser_ttypes.DAVUser();
        this.vehicleID.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.state = new Vehicle_ttypes.VehicleState();
        this.state.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

StatusReport_report_status_args.prototype.write = function(output) {
  output.writeStructBegin('StatusReport_report_status_args');
  if (this.authenticationToken !== null && this.authenticationToken !== undefined) {
    output.writeFieldBegin('authenticationToken', Thrift.Type.STRING, 1);
    output.writeString(this.authenticationToken);
    output.writeFieldEnd();
  }
  if (this.vehicleID !== null && this.vehicleID !== undefined) {
    output.writeFieldBegin('vehicleID', Thrift.Type.STRUCT, 2);
    this.vehicleID.write(output);
    output.writeFieldEnd();
  }
  if (this.state !== null && this.state !== undefined) {
    output.writeFieldBegin('state', Thrift.Type.STRUCT, 3);
    this.state.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StatusReport_report_status_result = function(args) {
};
StatusReport_report_status_result.prototype = {};
StatusReport_report_status_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

StatusReport_report_status_result.prototype.write = function(output) {
  output.writeStructBegin('StatusReport_report_status_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StatusReportClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
StatusReportClient.prototype = {};
StatusReportClient.prototype.seqid = function() { return this._seqid; };
StatusReportClient.prototype.new_seqid = function() { return this._seqid += 1; };
StatusReportClient.prototype.is_registered = function(authenticationToken, vehicleID, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_is_registered(authenticationToken, vehicleID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_is_registered(authenticationToken, vehicleID);
  }
};

StatusReportClient.prototype.send_is_registered = function(authenticationToken, vehicleID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('is_registered', Thrift.MessageType.CALL, this.seqid());
  var args = new StatusReport_is_registered_args();
  args.authenticationToken = authenticationToken;
  args.vehicleID = vehicleID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

StatusReportClient.prototype.recv_is_registered = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new StatusReport_is_registered_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('is_registered failed: unknown result');
};
StatusReportClient.prototype.report_status = function(authenticationToken, vehicleID, state, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_report_status(authenticationToken, vehicleID, state);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_report_status(authenticationToken, vehicleID, state);
  }
};

StatusReportClient.prototype.send_report_status = function(authenticationToken, vehicleID, state) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('report_status', Thrift.MessageType.CALL, this.seqid());
  var args = new StatusReport_report_status_args();
  args.authenticationToken = authenticationToken;
  args.vehicleID = vehicleID;
  args.state = state;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

StatusReportClient.prototype.recv_report_status = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new StatusReport_report_status_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
var StatusReportProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
StatusReportProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
StatusReportProcessor.prototype.process_is_registered = function(seqid, input, output) {
  var args = new StatusReport_is_registered_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.is_registered.length === 2) {
    Q.fcall(this._handler.is_registered, args.authenticationToken, args.vehicleID)
      .then(function(result) {
        var result_obj = new StatusReport_is_registered_result({success: result});
        output.writeMessageBegin("is_registered", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("is_registered", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.is_registered(args.authenticationToken, args.vehicleID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new StatusReport_is_registered_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("is_registered", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("is_registered", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
StatusReportProcessor.prototype.process_report_status = function(seqid, input, output) {
  var args = new StatusReport_report_status_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.report_status.length === 3) {
    Q.fcall(this._handler.report_status, args.authenticationToken, args.vehicleID, args.state)
      .then(function(result) {
        var result_obj = new StatusReport_report_status_result({success: result});
        output.writeMessageBegin("report_status", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("report_status", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.report_status(args.authenticationToken, args.vehicleID, args.state, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new StatusReport_report_status_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("report_status", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("report_status", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
