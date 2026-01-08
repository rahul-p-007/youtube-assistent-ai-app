-- ============================================
-- CHATBOT DATABASE SCHEMA (SINGLE FILE)
-- ============================================

-- Drop tables if they already exist (optional, for clean reset)
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS chat_sessions CASCADE;
DROP TABLE IF EXISTS chatbot_characteristics CASCADE;
DROP TABLE IF EXISTS guests CASCADE;
DROP TABLE IF EXISTS chatbots CASCADE;

-- ============================================
-- CREATE TABLES
-- ============================================

-- Chatbots table
CREATE TABLE chatbots (
    id SERIAL PRIMARY KEY,
    clerk_user_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Chatbot characteristics table
CREATE TABLE chatbot_characteristics (
    id SERIAL PRIMARY KEY,
    chatbot_id INT REFERENCES chatbots(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Guests table
CREATE TABLE guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Chat sessions table
CREATE TABLE chat_sessions (
    id SERIAL PRIMARY KEY,
    guest_id INT REFERENCES guests(id) ON DELETE SET NULL,
    chatbot_id INT REFERENCES chatbots(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    chat_session_id INT REFERENCES chat_sessions(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    sender VARCHAR(50) NOT NULL, -- user | ai
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- ============================================
-- TRIGGER FUNCTION FOR created_at
-- ============================================

CREATE OR REPLACE FUNCTION set_created_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.created_at IS NULL THEN
        NEW.created_at := CURRENT_TIMESTAMP;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TRIGGERS
-- ============================================

CREATE TRIGGER set_chatbots_created_at
BEFORE INSERT ON chatbots
FOR EACH ROW EXECUTE FUNCTION set_created_at();

CREATE TRIGGER set_chatbot_characteristics_created_at
BEFORE INSERT ON chatbot_characteristics
FOR EACH ROW EXECUTE FUNCTION set_created_at();

CREATE TRIGGER set_guests_created_at
BEFORE INSERT ON guests
FOR EACH ROW EXECUTE FUNCTION set_created_at();

CREATE TRIGGER set_chat_sessions_created_at
BEFORE INSERT ON chat_sessions
FOR EACH ROW EXECUTE FUNCTION set_created_at();

CREATE TRIGGER set_messages_created_at
BEFORE INSERT ON messages
FOR EACH ROW EXECUTE FUNCTION set_created_at();

-- ============================================
-- SAMPLE DATA INSERTS
-- ============================================

-- Insert chatbots
INSERT INTO chatbots (clerk_user_id, name) VALUES
('clerk_user_id_1', 'Customer Support Bot'),
('clerk_user_id_2', 'Sales Bot'),
('clerk_user_id_3', 'Support Bot');

-- Insert chatbot characteristics
INSERT INTO chatbot_characteristics (chatbot_id, content) VALUES
(1, 'You are a helpful customer support assistant'),
(1, 'Our support hours are 9am to 5pm, Monday to Friday'),
(1, 'You can track your order status by entering your order number'),
(2, 'You are a helpful sales assistant'),
(2, 'We have a wide range of products to choose from'),
(2, 'You can find our contact details on our website'),
(3, 'You are a helpful customer support assistant'),
(3, 'Our support hours are 9am to 5pm, Monday to Friday'),
(3, 'You can track your order status by entering your order number'),
(3, 'You can find our contact details on our website');

-- Insert guests
INSERT INTO guests (name, email) VALUES
('Guest 1', 'guest1@example.com'),
('Guest 2', 'guest2@example.com'),
('Guest 3', 'guest3@example.com');

-- Insert chat sessions
INSERT INTO chat_sessions (guest_id, chatbot_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 1),
(3, 2);

-- Insert messages
INSERT INTO messages (chat_session_id, content, sender) VALUES
(1, 'Hello, I need help with my order', 'user'),
(1, 'Sure, I can help with that. What seems to be the problem?', 'ai'),
(2, 'Can you tell me more about your product?', 'user'),
(2, 'Sure, our product is made with high-quality materials.', 'ai');

-- ============================================
-- END OF FILE
-- ============================================
