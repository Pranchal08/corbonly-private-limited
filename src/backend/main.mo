import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    name : Text;
    email : Text;
    content : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compare(message1 : Message, message2 : Message) : Order.Order {
      switch (Int.compare(message1.timestamp, message2.timestamp)) {
        case (#equal) {
          compareByEmail(message1, message2);
        };
        case (order) { order };
      };
    };

    public func compareByEmail(message1 : Message, message2 : Message) : Order.Order {
      Text.compare(message1.email, message2.email);
    };
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, content : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or content.isEmpty()) {
      Runtime.trap("All fields are required to submit a contact form message.");
    };

    let newMessage : Message = {
      name;
      email;
      content;
      timestamp = Time.now();
    };

    messages.add(newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.toArray().sort();
  };
};
