module.exports = {
    namespaces: [
        {
          uri: 'http://opcfoundation.org/UA/Robotics',
          author: 'Randy Armstrong',
          download: 'https://raw.githubusercontent.com/OPCFoundation/UA-Nodeset/v1.04/Robotics/Opc.Ua.Robotics.NodeSet2.xml'
        },
        {
          uri: 'http://opcfoundation.org/UA/Scales',
          author: 'Jonathan Wise',
          download: 'https://raw.githubusercontent.com/OPCFoundation/UA-Nodeset/v1.04/Scales/Opc.Ua.Scales.NodeSet2.xml'
        },
        {
          uri: 'http://opcfoundation.org/UA/MachineTool',
          author: 'Goetz Goerisch',
          download: 'https://raw.githubusercontent.com/OPCFoundation/UA-Nodeset/v1.04/MachineTool/Opc.Ua.MachineTool.NodeSet2.xml'
        }
      ],
      objecttypes: [
        {
          browsename: 'WeighingItemType',
          nodeid: {
            value:'24',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/Scales'
        },
        {
          browsename: 'MaterialType',
          nodeid: {
            value:'35',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/Scales'
        },
        {
          browsename: 'StatisticCounterType',
          nodeid: {
            value:'43',
            idtype:'Numeric'
          },
          description: 'Container for the different statisticvalues needed in a Checkweigher.',
          uri: 'http://opcfoundation.org/UA/Scales'
        },
        {
          browsename: 'TotalizerType',
          nodeid: {
            value:'27',
            idtype:'Numeric'
          },
          description: 'Contains the sum over the last measurement results.',
          uri: 'http://opcfoundation.org/UA/Robotics'
        },
        {
          browsename: 'EmergencyStopFunctionType',
          nodeid: {
            value:'17230',
            idtype:'Numeric'
          },
          description: 'According to ISO 10218-1:2011 Ch.5.5.2 Emergency stop the robot shall have one or more emergency stop functions.',
          uri: 'http://opcfoundation.org/UA/Robotics'
        },
        {
          browsename: 'ProtectiveStopFunctionType',
          nodeid: {
            value:'17233',
            idtype:'Numeric'
          },
          description: 'According to ISO 10218-1:2011 Ch.5.5.3 the robot shall have one or more protective stop functions designed for the connection of external protective devices.',
          uri: 'http://opcfoundation.org/UA/Robotics'
        },
        {
          browsename: 'MachineToolIdentificationType',
          nodeid: {
            value:'11',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/MachineTool',
          childnodes: [{
            browsename: 'Production',
            nodeid: {
              value:'82',
              idtype:'Numeric'
            },
            description: 'ActiveProgram',
            uri: 'http://opcfoundation.org/UA/MachineTool',
          },
          {
            browsename: 'Notification',
            nodeid: {
              value:'128',
              idtype:'Numeric'
            },
            description: 'ActiveProgram',
            uri: 'http://opcfoundation.org/UA/MachineTool',
          },
          {
            browsename: 'Monitoring',
            nodeid: {
              value:'123',
              idtype:'Numeric'
            },
            description: 'ActiveProgram',
            uri: 'http://opcfoundation.org/UA/MachineTool',
          },
          {
            browsename: 'Equipment',
            nodeid: {
              value:'131',
              idtype:'Numeric'
            },
            description: 'ActiveProgram',
            uri: 'http://opcfoundation.org/UA/MachineTool',
          }]
        },
        {
          browsename: 'ProductionJobListType',
          nodeid: {
            value:'30',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/MachineTool'
        },
        {
          browsename: 'EquipmentType',
          nodeid: {
            value:'12',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/MachineTool'
        },
        {
          browsename: 'MonitoringType',
          nodeid: {
            value:'14',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/MachineTool'
        },
        {
          browsename: 'ProductionStatisticsType',
          nodeid: {
            value:'20',
            idtype:'Numeric'
          },
          description: '',
          uri: 'http://opcfoundation.org/UA/MachineTool'
        }
      ],
      authors : [
        {
          id: '1',
          name: 'Goetz Goerisch'
        },
        {
          id: '2',
          name: 'Randy Armstrong'
        }
      ]
  };
